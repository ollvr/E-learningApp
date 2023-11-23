<template>
        <div class="form-container">
            <h1> {{ course_store.course_name  }} </h1>
            <form @submit.prevent="addQuestionToCourse(formData)">
                <!-- Input for course questions -->
                <label for="course-questions" class="form-label">Course Questions:</label>
                <textarea id="course-questions" v-model="formData.course_Questions" class="form-textarea" required></textarea>

                <label for="course-answers" class="form-label">Question Suggestions </label>
                <textarea id="course-answers" v-model="formData.QuestionSuggestions" class="form-textarea" required></textarea>

                <!-- Input for course answers -->
                <label for="course-answers" class="form-label">Course Answers:</label>
                <textarea id="course-answers" v-model="formData.QuestionAnsewer" class="form-textarea" required></textarea>

                <button type="submit" class="submit-button">Add Questions </button>
            </form>
        </div>
        <div v-if="MsgQuestionCreations">
           <h3 style="color:blue;text-align:center">{{ MsgQuestionCreations }}</h3>
        </div>

</template>

<script setup>
import { onMounted, ref } from "vue";
import useCourseApi from "../../../Api/Courses/CourseApi";
import { useRouter, useRoute } from 'vue-router'
import { useTeacherSpecificCourseStore } from "../../../stores/TeacherSpecificCourseStore";
const route = useRoute()
const formData = ref({
    course_id: +route.params.CourseId,
    course_Questions : "",
    QuestionAnsewer:"",
    QuestionSuggestions:"",

})
const router = useRouter()
const {GetCourse,Course,addQuestionToCourse,MsgQuestionCreations} = useCourseApi()
const course_store = useTeacherSpecificCourseStore()
onMounted(()=>{
    GetCourse(route.params.CourseId)
    console.log("Course id => ",route.params.CourseId)
})
</script>

<style scoped>
@import url("/assets/css/CourseDesign.css");
.form-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
    font-family: Arial, sans-serif;
}

/* Form label */
.form-label {
    display: block;
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
}

/* Input fields */
.form-input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    margin-bottom: 20px;
}

/* Textarea for course questions and answers */
.form-textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    resize: vertical;
    height: 150px; /* Adjust the height as needed */
}

/* Submit button */
.submit-button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    text-align: center;
    cursor: pointer;
}

.submit-button:hover {
    background-color: #0056b3;
}
</style>
