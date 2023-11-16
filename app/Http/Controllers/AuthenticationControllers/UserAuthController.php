<?php

namespace App\Http\Controllers\AuthenticationControllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\AuthRequests\LoginRequest;
use App\Http\Requests\AuthRequests\UserRegisterRequest;

use App\Http\Resources\UserResource;
use App\Models\Student;
use App\Models\Teacher;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserAuthController extends Controller
{
    //

    public function Create_User(UserRegisterRequest $request)
    {
        $request->validated($request->all());

       
        $hashed_password = Hash::make($request->password);
        if ($request->role == "Student") {
            $student = User::create([
                "name" => $request->name,
                "email" => $request->email,
                "password" => $hashed_password,
                "role" => "Student"
            ]);
            Student::create([
                "user_id" => $student->id
            ]);
            return
            [
                "User" => new UserResource($student),
                "token" => $student->createToken("Student Token")->plainTextToken
            ];
        } else if
        ($request->role == "Teacher") {
            $teacher = User::create([
                "name" => $request->name,
                "email" => $request->email,
                "password" => $hashed_password,
                "role" => "Teacher"
            ]);

            Teacher::create([
                "user_id" => $teacher->id
            ]);

            return [
              "User" => new UserResource($teacher),
              "token" => $teacher->createToken("Teacher token")->plainTextToken
            ];
        }
    }

   public function user_Login(LoginRequest $request){
    $request->validated($request->all());
      $credentials = [
        'email' => $request->email,
        'password' => $request->password,
    ];
    if(Auth::attempt($credentials)){
        $user = User::where("email",$request->email)->first();
        if($user->role == "Teacher")
        return response()->json([
            "Status" => "succes",
            "User" => new UserResource($user),
            "token" => $user->createToken("Teacher token")->plainTextToken
        ]);
        elseif ($user->role == "Student"){
          return response()->json([
            "Status" => "succes",
            "User" => new UserResource($user),
            "token" => $user->createToken("Student Token")->plainTextToken
          ]);
        }
    }
    else {
        return response()->json([
            "Status" => "fail Bad Credantails"
        ]);
    }
   }



   public function CompeleteLoginStudent(Request $request){
    $student_id = Auth::user()->id;

    if($student_id == $request->user()->id){
        Student::where("user_id",$student_id)->update([
            "city" => $request->city ? $request->city : null,
            "university_name" => $request->university_name ? $request->university_name : null,
            "other" => $request->other ? $request->other : null
        ]);

        return response()->json([
            "Msg" => "Student Details Updated Succefully"
        ]);
    }

    return response()->json([
        "Msg" => "You are Not Authorized"
    ]);
   }


   public function CompeleteLoginTeacher(Request $request){
    $teacher_id = Auth::user()->id;

    if($teacher_id == $request->user()->id){
        Teacher::where("user_id",$teacher_id)->update([
            "teacher_job" => $request->teacher_job ? $request->teacher_job : null,

        ]);

        return response()->json([
            "Msg" => "Teacher  Details Updated Succefully"
        ]);
    }

    return response()->json([
        "Msg" => "You are Not Authorized"
    ]);
   }


   public function Logout(){
    Auth::user()->tokens()->delete();
    return response()->json([
        "Msg" => "Logout Succefully"
    ]);
   }


}




