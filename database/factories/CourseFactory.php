<?php

namespace Database\Factories;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Course>
 */
class CourseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public $arr = ["laravel","spring","php","js","react","vue","angular",".net","Cyber-security","Web-design","full-stack-js"];
    public function definition(): array
    {
        return [
            "course_name" => $this->arr[array_rand($this->arr)],
            "user_id" => random_int(24,25),
            "teacher_id" => random_int(1,2)
        ];
    }
}
