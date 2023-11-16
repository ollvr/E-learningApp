<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Feedback extends Model
{
    use HasFactory;
    protected $table = "feedbacks";
    public $timestamps = false;
    protected $fillable = [
        "student_id",
        "feedback"
    ];
}
