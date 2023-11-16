<template>
    <div>
        <form @submit.prevent="CompeleteLoginTeacher(Login_Teacher_details_form)">
            <label for="TeacherJob" class="form-label"> Put Your Job as a teacher(ex:Full-Stack-Developer)</label>
            <input type="text"
            v-model="Login_Teacher_details_form.teacher_job"
            id="TeacherJob"
            class="form-input">
            <button class="submit-button" type="submit">submit</button>
        </form>

        <div v-if="UpdateMessageTeacher">
            <h3 style="color:red;text-align:center;">{{ UpdateMessageTeacher }}</h3>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import useAuthApi from '../../../Api/Authentication/SignInSignUpAuth';
const {CompeleteLoginTeacher,UpdateMessageTeacher} = useAuthApi()
const Login_Teacher_details_form = ref({
    teacher_job	:""
})
</script>

<style  scoped>
.form-label {
    display: block;
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
  }

  /* Form input fields */
  .form-input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    margin-bottom: 20px;
  }

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
