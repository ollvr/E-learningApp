<template>
    <div>
        <div>
        <h3 style="color:red;text-align:center">{{ register_course_store.course_name }}</h3>
    </div>
    <div class="course-container">

        <!-- Course image on the left -->
        <img :src="`${register_course_store.course_img}`" alt="Course Image" class="course-image">

        <!-- Video playlist on the right -->
        <div class="video-playlist">
            <!-- Video 1 -->
            <div class="video-item selected" v-for="c,index in CourseLinks" :key="c">
                <img :src="`${register_course_store.course_img}`" alt="Video Thumbnail 1">
                <div class="video-title">
                 <h5 style="color:rgb(245, 194, 28);"> Video n° {{ index +1 }} </h5>
                 <h5 style="color:gold"> {{ c[index].VideoLink }}</h5>
                </div>
            </div>

            <!-- Video 2 -->
            <div class="video-item" v-if="CourseLinks.length<2">
                <img :src="`${register_course_store.course_img}`" alt="Video Thumbnail 2">
                <div class="video-title">Still courses are coming in the future ....</div>
            </div>



            <!-- Add more videos as needed -->
        </div>
        <h4 style="color:rgb(154, 21, 190);text-align:center">
                Pass the exam after watching video
                but you are free you can pass directly the exam
            </h4>
            <router-link :to="{name:'Exam',params:{courseId: CourseLinks.id} }">Go To exam </router-link>
    </div>

    </div>

</template>

<script setup>
import { onMounted } from 'vue';
import useCourseApi from '../../../Api/Courses/CourseApi';
import { useRegisterToSpecificCourseStore } from '../../../stores/RegisterToSpecificCourseDetailStore';
import { useRouter, useRoute } from 'vue-router'

const route = useRoute()
const register_course_store = useRegisterToSpecificCourseStore()
const {getCourseVideos,CourseLinks} = useCourseApi()

onMounted(()=>{
    getCourseVideos(route.params.courseId)
})
</script>

<style  scoped>
@import url("/assets/css/CourseDesign.css");
</style>
