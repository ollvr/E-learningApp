<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Student extends Model
{
    use HasFactory;
    protected $fillable = [
        "user_id",
        "city",
        "university_name",
        "other"
    ];

    public function courses():HasMany{
        return $this->hasMany(Course::class);
    }
}
