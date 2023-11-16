<template>
    <div>
        <div>
            <h1>THIS WHERE YOU CAN SEE YOUR COURSES</h1>
            <div class="card" v-for="tcourse in teacher_course" :key="tcourse">
                <div class="card-header">
                    <h3>{{ tcourse.course_name }}</h3>
                </div>
                <img :src="`${tcourse.course_img}`" alt="Course #1" />
                <div class="card-content">
                    <button @click="showDescription = !showDescription">
                        Show Course Description
                    </button>
                    <div v-if="showDescription">
                        <p>{{ tcourse.course_description }}</p>
                    </div>
                    <h3>course by You</h3>
                </div>
                <div style="text-align:center">
                     <router-link :to="{name:'GetCourse',params: { CourseId: tcourse.id } }">Complete Questions</router-link>
                </div>

            </div>

        </div>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-cards";
import { onMounted, ref } from "vue";
import useTeacherApi from "../../../Api/UsersDashbordsApi/TeacherApi";
import { useTeacherStore } from "../../../stores/teacher_store";
const store = useTeacherStore()
const showDescription = ref(false)
const { getTeacherCourse, teacher_course } = useTeacherApi();
onMounted(() => {
    getTeacherCourse(3);
});
</script>

<style lang="scss" scoped>
@import url("/assets/css/CardDesign.css");

.swiper {
    width: 240px;
    height: 320px;
}

.swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    font-size: 22px;
    font-weight: bold;
    color: #fff;
}

.swiper-slide:nth-child(1n) {
    background-color: rgb(206, 17, 17);
}

.swiper-slide:nth-child(2n) {
    background-color: rgb(0, 140, 255);
}

.swiper-slide:nth-child(3n) {
    background-color: rgb(10, 184, 111);
}

.swiper-slide:nth-child(4n) {
    background-color: rgb(211, 122, 7);
}

.swiper-slide:nth-child(5n) {
    background-color: rgb(118, 163, 12);
}

.swiper-slide:nth-child(6n) {
    background-color: rgb(180, 10, 47);
}

.swiper-slide:nth-child(7n) {
    background-color: rgb(35, 99, 19);
}

.swiper-slide:nth-child(8n) {
    background-color: rgb(0, 68, 255);
}

.swiper-slide:nth-child(9n) {
    background-color: rgb(218, 12, 218);
}

.swiper-slide:nth-child(10n) {
    background-color: rgb(54, 94, 77);
}
</style>
