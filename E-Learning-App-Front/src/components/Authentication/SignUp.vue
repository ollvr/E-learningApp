<template>
  <div class="main">
    <!-- Sign up form -->
    <section class="signup">
      <div class="container">
        <div class="signup-content">
          <div class="signup-form">
            <h2 class="form-title">Sign up</h2>
            <form
              method="POST"
              class="register-form"
              id="register-form"
              @submit.prevent="createAccount(User_Register)"
            >
              <div class="form-group">
                <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                <input type="text" v-model="User_Register.name" id="name" placeholder="Your Name" />
              </div>
              <div class="form-group">
                <label for="email"><i class="zmdi zmdi-email"></i></label>
                <input
                  type="email"
                  v-model="User_Register.email"
                  id="email"
                  placeholder="Your Email"
                />
              </div>
              <div class="form-group">
                <div>Are You Student Or Teacher</div>
                <br />
                <input type="radio" id="teacher" value="Teacher" v-model="User_Register.role" />
                <label for="teacher" class="label-radio">Teacher</label>
                <input type="radio" id="student" value="Student" v-model="User_Register.role" />
                <label for="student" class="label-radio">Student</label>
              </div>
              <div class="form-group">
                <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                <input
                  type="password"
                  v-model="User_Register.password"
                  id="pass"
                  placeholder="Password"
                />
              </div>

              <div class="form-group form-button">
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  class="form-submit"
                  value="Register"
                />
              </div>
            </form>
          </div>
          <div class="signup-image">
            <figure>
              <img src="/assets/images/signup-image.jpg" alt="sing up image" />
            </figure>
            <router-link :to="{ name: 'SignIn' }" class="signup-image-link"
              >I am already member</router-link
            >
          </div>
        </div>
        <div v-if="Errors.length > 0">
          <div>
            <ul>
              <li style="color: red" v-for="err in Errors" :key="err">
                {{ err }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import useAuthApi from '../../Api/Authentication/SignInSignUpAuth'
const { createAccount, Errors } = useAuthApi()

const User_Register = ref({
  name: '',
  email: '',
  password: '',
  role: ''
})
</script>

<style scoped>
@import url('/assets/css/SignInSignUp.css');
.label-radio {
  position: unset;
}
</style>
