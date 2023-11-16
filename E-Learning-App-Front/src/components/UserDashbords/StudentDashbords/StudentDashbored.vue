<template>
    <div>
        <div class="sidebar">
          <router-link :to="{name:'studentCourses'}">See All Your Registration Course</router-link>
          <router-link :to="{name:'studentCertif'}">See All Your Certification</router-link>
          <router-link :to="{name:'RegisterToCourse'}">Register To A Course </router-link>
          <router-link :to="{name:'studentFeedback'}">Write Your FeedBack</router-link>
          <router-link :to="{name:'CompleteLoginStudent'}"> Complete Your Account Details </router-link>
          <button class="logout-button" @click="Logout('Student')">Logout</button>
      </div>

      <!-- Content -->
          <div class="content">
            <router-view></router-view>
          </div>
      </div>
</template>

<script setup>
import useAuthApi from '../../../Api/Authentication/SignInSignUpAuth';
const {Logout} = useAuthApi()
</script>

<style  scoped>
@import url("/assets/css/DashboredDesign.css");
.logout-button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #100d15; /* Grey background color */
    color: #e5a510; /* White text color */
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
