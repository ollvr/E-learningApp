<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Teacher extends Model
{
    use HasFactory;
    protected $table = "teachers";
    protected $fillable = [
        "teacher_job",
         "user_id"
    ];

    public function courses():BelongsTo{
        return $this->belongsTo(Course::class);
    }
}
