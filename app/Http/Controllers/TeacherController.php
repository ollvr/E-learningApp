<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\CourseQuestion;
use App\Models\Teacher;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TeacherController extends Controller
{
    //

    public function findTheTeacher($user_id){
        return response()->json(
            [
                "Teacher" => Teacher::where("user_id", $user_id)->first()
            ]
        );
    }


}
