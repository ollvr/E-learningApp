<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Course extends Model
{
    use HasFactory;
    protected $table = "course";
    public $timestamps = false;
    protected $fillable = [
        "teacher_id",
        "course_name",
        "course_description",
        "course_img",
        "VideoLink"
    ];

    public function teachers():HasMany{
        return $this->hasMany(Teacher::class);
    }
}
