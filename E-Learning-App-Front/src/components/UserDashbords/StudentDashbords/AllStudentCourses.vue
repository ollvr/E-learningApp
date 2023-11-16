<template>
    <div>
       <h1 style="color:red">Here Your Registration Course </h1>
       <table>
           <tr>
               <th>Course Name</th>
               <th>Date of Registration</th>
               <th>certified ? </th>
           </tr>
           <tr v-for="courses in StudentCourses" :key="courses">
               <td>{{ courses.course_name }}</td>
               <td>{{ courses.registration_date }}</td>
               <td>{{ courses.certified }}</td>
           </tr>
           <!-- Add more rows as needed -->
       </table>
    </div>
</template>

<script setup>
import useCourseApi from '../../../Api/Courses/CourseApi';
import { onMounted } from 'vue';

const {getStudentCourse,StudentCourses} = useCourseApi()

onMounted(()=>{
    getStudentCourse()
})
</script>

<style  scoped>
table {
    width: 80%;
    margin: 20px auto;
    border-collapse: collapse;
    font-family: Arial, sans-serif;
}

th, td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
}

th {
    background-color: #f2f2f2;
}

tr:nth-child(even) {
    background-color: #f2f2f2;
}
</style>
