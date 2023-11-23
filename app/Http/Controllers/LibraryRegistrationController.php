<?php

namespace App\Http\Controllers;

use App\Models\LibraryRegistration;
use Illuminate\Http\Request;

class LibraryRegistrationController extends Controller
{
    //

    public function addToWaitList(Request $request){
        $specifcUser = LibraryRegistration::where("email",$request->email)->get();
        if(count($specifcUser) > 0) {
            return response()->json([
                "Msg" => "You are already added "
            ]);
        }
        else { 
            LibraryRegistration::create([
                "Nom" => $request->Nom,
                "email" => $request->email
            ]);

            return response()->json([
                "Msg" => "added Succefully"
            ]);
        }
      
    }
}
