<?php

namespace Database\Factories;

use App\Models\Teacher;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Teacher>
 */
class TeacherFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Teacher::class;
    public $arr = ["full-stack-developer","Security-specialist","Software-architect","Designer"];
    public function definition(): array
    {

        return [
            "teacher_job" => $this->arr[array_rand($this->arr)]
        ];
    }
}
