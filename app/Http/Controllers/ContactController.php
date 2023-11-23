<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    //

    public function SaveContactMessage(Request $request){
        $specContact = Contact::where("email",$request->email)->get();
        if( count($specContact) > 0 ){
            return response()->json([
                "Msg" => "You have Already Contact Us"
            ]);
        }
        else{
            Contact::create([
                "Nom" => $request->Nom,
                "email" => $request->email,
                "Message" => $request->Message
            ]);

            return response()->json([
                "Msg" => "Thanks For your Message"
            ]);
        }
    }
}
