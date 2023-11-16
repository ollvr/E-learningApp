<template>
  <div>
    <h1 style="color: brown; text-align: center">All the Courses are Here</h1>
    <br />
    <h1 style="color: rgb(26, 10, 10); text-align: center">
      Swipe To see All The Courses
    </h1>
    <div>
      <swiper :pagination="true" :modules="modules" class="mySwiper">
        <swiper-slide
          v-for="teacher_course in All_Teachers_Courses"
          :key="teacher_course"
        >
          <form @submit.prevent="Register_to_Course(teacher_course.id,Student_store.id)">
            <div class="card">
              <div class="card-header">
                <h3>{{ teacher_course.course_name }}</h3>
              </div>
              <img :src="`${teacher_course.course_img}`" alt="Course #1" />
              <div class="card-content">
                <p>{{ teacher_course.course_description }}</p>
                <h3>course by {{ teacher_course.name }}</h3>
                <p>course Price : {{ teacher_course.course_price }}</p>
                <button type="submit">Register Now</button>
              </div>
            </div>
          </form>
        </swiper-slide>
      </swiper>
    </div>

    <div v-if="Register_to_course_msg">
        <p style="color:red;text-align:center">{{ Register_to_course_msg }}</p>
    </div>
  </div>
</template>

<script setup>
import { useStudentDetailStore } from "../../../stores/student_detail_store";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

import { onMounted } from "vue";
import useCourseApi from "../../../Api/Courses/CourseApi";

const { getAllTeachersCourses, All_Teachers_Courses,Register_to_Course,Register_to_course_msg } = useCourseApi();
const Student_store = useStudentDetailStore()

onMounted(() => {
  getAllTeachersCourses();
});
</script>

<style scoped>
@import url("/assets/css/CardDesign.css");
.card {
  margin-bottom: 15px;
  width: 250px;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
