<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Course;
use App\Models\Student;
use App\Models\Teacher;
use Illuminate\Http\Request;
use App\Models\CourseQuestion;
use App\Models\StudentRegistration;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Date;
use Illuminate\Database\Eloquent\Factories\Sequence;

class CourseController extends Controller
{
    //
    // here we get all the courses published by our teachers
    public function getAllCoursesPublishedByAllTeachers()
    {
        $publishedCoursesByOurTeachers = DB::table('course')
            ->join('teachers', 'course.teacher_id', '=', 'teachers.id')
            ->join('users', 'users.id', '=', 'teachers.user_id')
            ->select('course.id', 'course.course_name', "course.course_img", "course.course_description", 'teachers.teacher_job', 'users.name')
            ->get();

        return response()->json(
            [
                "Status" => "succes",
                "PublishedTeacherCourses" => $publishedCoursesByOurTeachers
            ]
        );
    }

    public function getTeacherCourse($teacher_id)
    {
        $teacher = Teacher::findOrFail($teacher_id);
        $courses = Course::where("teacher_id", $teacher_id)->get();
        return response()->json([
            "Status" => "Succes",
            "Courses" => $courses
        ]);
    }


    public function getAllStudentCourses($student_id)
    {
        $student_courses =  DB::table("student_registrations")
                                ->join("course","student_registrations.course_id","=","course.id")
                                ->select("student_registrations.student_id",
                                "student_registrations.certified",
                                "student_registrations.registration_date",
                                "course.course_name",
                                "course.id")
                                ->where("student_registrations.student_id","=",$student_id)
                                ->get();
            return response()->json([
            "StudentCourses" => $student_courses
        ]);
    }

    public function getAllStudentCertification($student_id)
    {
        $certifiedCourse = DB::table("student_registrations")
                            ->join("course","student_registrations.course_id","=","course.id")
                            ->join("teachers","course.teacher_id","=","teachers.id")
                            ->join("users","users.id","=","teachers.user_id")
                             ->select("student_registrations.certified",
                             "student_registrations.student_id",
                             "course.course_name",
                             "users.name",
                             "student_registrations.registration_date"
                             )
                             ->where("student_registrations.student_id","=",$student_id)
                             ->where("student_registrations.certified","=","yes")
                             ->get();

        return response()->json([
            "Certification" => $certifiedCourse
        ]);


    }


    public function addCourse(Request $request)
    {
        if (Auth::user()->id == $request->user()->id) {
           $image = substr($request->course_img,12);
           $oldPath = substr($request->course_img,0,13);
            $newPath = "/assets/images/".$image;
            $course = Course::create([
                "teacher_id" => $request->teacher_id,
                "course_name" => $request->course_name,
                "course_description" => $request->course_description,
                "course_img" => $newPath,
                "certified" => $request->certified,
                "VideoLink" => $request->VideoLink

            ]);

            return response()->json([
                "msg" => "Course Created Succefully",
                "sendedImage" => $request->course_img
            ]);
            
        } else {
            return response()->json([
                "msg" => "You are Not authorized"
            ]);
        }
    }



    public function Register_To_Course(Request $request)
    {

        $student_course = DB::table("student_registrations")
                            ->join("course","student_registrations.course_id","=","course.id")
                            ->select("course.id","student_registrations.certified")
                            ->where("course.id","=",$request->course_id)
                            ->where("student_registrations.student_id","=",$request->student_id)
                            ->get();


        if($student_course->count() > 0){
            if($student_course[0]->certified == "yes"){
                return response()->json([
                    "Msg" => "you are already certified in this course",
                    "course_registred" => null,
                    "NotCertified" => false
                ]);
            }

            return response()->json([
                "Msg" => "You are already registred in this course , you can watch the videos and pass the exam",
                "course_registred" => null,
                "NotCertified" => true
            ]);
        }
        else{
            $course_registred = StudentRegistration::create([
                "student_id" =>$request->student_id,
                "course_id" => $request->course_id,
                "registration_date" => Date::now(),
                "certified" => "no"
            ]);

            return response()->json([
                "Msg" => "You have Succefully registred to this course",
                "course_registred" => $course_registred,
                "NotCertified" => true
            ]);
        }

    }

    public function GetCourse($courseId)
    {
        $course = Course::findOrFail($courseId);
        return response()->json([
            "Course" => $course
        ]);
    }


    public function addQuestionsTo_A_Course(Request $request)

    {
        if (Auth::user()->id == $request->user()->id) {
            $course = Course::findOrFail($request->course_id);
            $newCourseQuestions = CourseQuestion::create([
                "Course_id" => $request->course_id,
                "course_Questions"  => $request->course_Questions,
                "QuestionSuggestions" => $request->QuestionSuggestions,
                "QuestionAnsewer" => $request->QuestionAnsewer,

            ]);

            return response()->json([
                "Msg" => "Quesntions and Ansewrs Created Succefully"
            ]);
        }
        return response()->json([
            "Msg" => "You are not Authorized"
        ]);
    }


    public function getCourseVideos($courseId)
    {
        $courseVideos =  DB::table("course")->select("VideoLink")->where("id", $courseId)->get();
        return response()->json([
            "CourseLinks" => $courseVideos
        ]);
    }

    public function getCourseQuestions($courseId)
    {
        $course_Questions = CourseQuestion::where("Course_id", $courseId)->get();
        return response()->json([
            "CourseQuestions" => $course_Questions,
            "Number_of_line" => $course_Questions->count()
        ]);
    }

    public function SeeCourseAnsewers(Request $request,$courseId)
    {

        $courseQuestion = CourseQuestion::where("course_id",$courseId)->get();
        $correctAnsewer = 0;
        $wrongAnsewer = 0;
        foreach ($courseQuestion as $index => $question) {
            if($request->UserAnsewers[$index] == $question->QuestionAnsewer){
                $correctAnsewer ++;
            }else{
                $wrongAnsewer ++;
            }
        }
        $registred_student = StudentRegistration::where("course_id",$courseId)->where("student_id",$request->student_id)->get();
       
        if($wrongAnsewer == 0){
          $registred_student[0]->update([
            "certified" => "yes"
          ]);
        }
        return response()->json([
            "SendedAnsewers" => $request->UserAnsewers,
            "CorrectAnsewers" => $correctAnsewer,
            "WrongAnsewer" => $wrongAnsewer,
            "StudentId" => $request->student_id,
            "CourseId" => $courseId,
            "RegistredStudent" => $registred_student
        ]);
    }
}
