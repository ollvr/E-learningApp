<template>
  <div>
    <h1 style="color: brown;">Add New Course </h1>
    <form @submit.prevent="addCourse(Course_Data_Form)">
        <input type="text" v-model="Course_Data_Form.course_name" placeholder="Course Name">
        <textarea v-model="Course_Data_Form.course_description" placeholder="Course Description"></textarea>
        <input type="File" v-model="Course_Data_Form.course_img" placeholder="put a course image link">
        <input type="text" v-model="Course_Data_Form.VideoLink" placeholder="Put Video Link">
        <button type="submit">Create Course</button>
      </form>

      <div v-if="courseCreatedMsg">
        <p style="color:green">{{ courseCreatedMsg }}</p>
      </div>

  </div>
</template>

<script setup>
import { ref } from "vue";
import useCourseApi from "../../../Api/Courses/CourseApi";
import { useTeacherDetailStore } from "../../../stores/teacher_detail_store";
const {addCourse,courseCreatedMsg} = useCourseApi()
const teacher_store = useTeacherDetailStore()
const Course_Data_Form = ref({
    teacher_id:teacher_store.$state.id,
    course_name:"",
    course_description:"",
    course_img:"",
    VideoLink:""
})

</script>

<style  scoped>
.course-form {
    width: 500px;
    margin: 0 auto;
  }

  input, textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
  }

  button {
    background-color: #0099ff;
    color: #fff;
    padding: 10px;
    border: none;
    cursor: pointer;
  }
</style>
