<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LibraryRegistration extends Model
{
    use HasFactory;
    protected $table = "Library_Registartion";
    public $timestamps = false;
    protected $fillable = [
        "Nom",
        "email"
    ];

}
