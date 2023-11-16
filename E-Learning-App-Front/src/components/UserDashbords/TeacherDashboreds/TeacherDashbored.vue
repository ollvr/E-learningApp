<template>
    <div>
      <div class="sidebar">
        <router-link :to="{name:'seeMyCourse'}">See All Your Courses</router-link>
        <router-link :to="{name:'addCourse'}">Add Course</router-link>
        <router-link :to="{name:'StatDashbored'}">See Course Statistics</router-link>
        <router-link :to="{name:'CompleteLoginTeacher'}">Complete Your Account Details</router-link>
        <button class="logout-button" @click="Logout('Teacher')">Logout</button>
    </div>

    <!-- Content -->
        <div class="content">
            <!-- Your dashboard content goes here -->
            <router-view></router-view>
        </div>
    </div>

</template>

<script setup>
import useAuthApi from '../../../Api/Authentication/SignInSignUpAuth';
const {Logout} = useAuthApi()
</script>

<style scoped>
@import url("/assets/css/DashboredDesign.css");
.logout-button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #888; /* Grey background color */
    color: #fff; /* White text color */
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

/* Hover effect */
.logout-button:hover {
    background-color: #555; /* Darker grey background color on hover */
}
</style>
