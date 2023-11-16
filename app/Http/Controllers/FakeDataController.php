<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Course;
use Illuminate\Http\Request;

class FakeDataController extends Controller
{
    //

     // create fake users

   public function create_fake_users(){
    $users = User::factory()->count(10)->create();
    return response()->json("Created Succefully");
   }


   public function InsertTeachersCourse()
   {

       $courses = Course::factory()->count(10)->create();

       return response()->json([
           "Status" => "Succes"
       ]);
   }
}
