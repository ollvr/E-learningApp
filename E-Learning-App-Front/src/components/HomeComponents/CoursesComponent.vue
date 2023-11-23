<!-- eslint-disable no-unused-vars -->
<template>
  <div class="courses">
    <div>
      <div class="col-md-12">
        <div class="section-heading">
          <h2>Choose Your Course</h2>
        </div>
        <div class="section-heading">
          <h2> All this Courses Are free you just need to sign up or sign in</h2>
        </div>
      </div>
      <swiper
        :slidesPerView="3"
        :spaceBetween="30"
        :freeMode="true"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide
          v-for="teacher_course in All_Teachers_Courses"
          :key="teacher_course"
        >
          <div class="card">
            <div class="card-header">
              <h3>{{ teacher_course.course_name }}</h3>
            </div>
            <img :src="`${teacher_course.course_img}`" alt="Course #1" />
            <div class="card-content">
              <p>{{ teacher_course.course_description }}</p>
              <h3>course by {{ teacher_course.name }}</h3>
            </div>
          </div>
        </swiper-slide>
      </swiper>
     
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// eslint-disable-next-line no-unused-vars
import { Pagination } from "swiper/modules";

import useCourseApi from "../../Api/Courses/CourseApi";
// eslint-disable-next-line no-unused-vars
import { onMounted, ref } from "vue";

const { getAllTeachersCourses, All_Teachers_Courses } = useCourseApi();
onMounted(() => {
  getAllTeachersCourses();
});
</script>

<style scoped>
@import url("/assets/css/CardDesign.css");
.courses {
  background: #172238;
}
h2{
  color: rgb(248, 0, 0) 23, 56;
  text-align: center;
}
</style>
