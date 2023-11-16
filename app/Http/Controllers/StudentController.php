<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Feedback;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class StudentController extends Controller
{
    //

    public function findTheStudent($user_id){
        return response()->json([
            "Student" => Student::where("user_id",$user_id)->first()
        ]);
    }


    public function writeFeedback(Request $request){
        if(Auth::user()->id == $request->user()->id)
        {
            Feedback::upsert([
                ['student_id' => $request->student_id, 'feedback' => $request->feedback],
            ], ['student_id']);

            return response()->json([
                "Msg" => "Thanks for your Feedback"
            ]);
        }
        return response()->json([
            "Msg" => "Error"
        ]);
    }
}
