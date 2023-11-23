<template>
    <div>
        <div>
            <h1>THIS WHERE YOU CAN SEE YOUR COURSES</h1>
            <h4> Swipe to See All the courses </h4>
            <div class="card" v-for="tcourse in teacher_course" :key="tcourse">
                <div class="card-header">
                    <h3>{{ tcourse.course_name }}</h3>
                </div>
                <img :src="convertImagePath(tcourse.course_img)" alt="Course #1" />
                <div class="card-content"> 
                    <div>
                        <p>{{ tcourse.course_description }}</p>
                    </div>
                </div>
                <div style="text-align:center">
                    <router-link :to="{ name: 'GetCourse', params: { CourseId: tcourse.id } }">Complete
                        Questions</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { onMounted, ref } from "vue";
import useTeacherApi from "../../../Api/UsersDashbordsApi/TeacherApi";
import { useTeacherStore } from "../../../stores/teacher_store";
const store = useTeacherStore()
const showDescription = ref(false)
const { getTeacherCourse, teacher_course } = useTeacherApi();

function convertImagePath(strimgFakepath){
   let  newStr = strimgFakepath.replace("file:///C:/fakepath/","/assets/images/")
    return newStr
}
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
