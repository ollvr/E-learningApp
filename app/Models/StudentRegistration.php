<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudentRegistration extends Model
{
    use HasFactory;
    protected $table = "student_registrations";

    public $timestamps = false;

    protected $fillable = [
        "student_id",
        "course_id",
        "registration_date",
        "certified"
    ];
}
