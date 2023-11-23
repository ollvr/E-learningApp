<?php

use App\Http\Controllers\AuthenticationControllers\StudentsAuthenticationController;
use App\Http\Controllers\AuthenticationControllers\UserAuthController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\FakeDataController;
use App\Http\Controllers\LibraryRegistrationController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\TeacherController;
use App\Models\Course;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


// Authentication Routes
Route::controller(UserAuthController::class)->group(function(){
 Route::post("/createUsers","Create_User");
 Route::post("/login","user_Login");
});


// Courses routes
Route::get("/GetAllCourses",[CourseController::class,"getAllCoursesPublishedByAllTeachers"]);
Route::get("/getTeacher/{user_id}",[TeacherController::class,"findTheTeacher"]);
Route::get("/getStudent/{user_id}",[StudentController::class,"findTheStudent"]);
Route::get("/getAuthUser",[UserAuthController::class,"getAuthUser"]);
Route::middleware(['auth:sanctum'])->group(function () {

    Route::post("/writeFeedback",[StudentController::class,"writeFeedback"]);

    Route::put("/CompeleteLoginStudent",[UserAuthController::class,"CompeleteLoginStudent"]);
    Route::put("/CompeleteLoginTeacher",[UserAuthController::class,"CompeleteLoginTeacher"]);


    Route::controller(CourseController::class)->group(function(){
        // teacher
         Route::get("/getTeacherCourse/{id}","getTeacherCourse");
        // student
        Route::get("/getStudentCourse/{id}","getAllStudentCourses");

        Route::get("/getAllStudentCertification/{course_id}","getAllStudentCertification");

        Route::post("/addCourse","addCourse");

        Route::post("/Register_To_Course","Register_To_Course");


        Route::get("/GetCourse/{courseId}","GetCourse");
        Route::post("/addQuestionsTo_A_Course","addQuestionsTo_A_Course");
        Route::get("/getCourseVideos/{courseId}","getCourseVideos");
        Route::get("/getCourseQuestions/{courseId}","getCourseQuestions");
        Route::post("/SeeCourseAnsewers","SeeCourseAnsewers");

        Route::post("/SendAnsewers/{courseId}","SeeCourseAnsewers");
    });

    Route::post("/Logout",[UserAuthController::class,"Logout"]);
});



Route::controller(LibraryRegistrationController::class)->group(function(){
    Route::post("/addToWaitList","addToWaitList");
});


Route::controller(ContactController::class)->group(function(){
    Route::post("/addContactMessage","SaveContactMessage");
});

// factories route
Route::controller(FakeDataController::class)->group(function(){
    // create Fake Courses
     Route::get("/InsertTeachersCourse","InsertTeachersCourse");

     // Create Fake Users
    Route::get("/create_fake_users","create_fake_users");
});
