<template>
  <div class="main">
    <!-- Sing in  Form -->
    <section class="sign-in">
      <div class="container">
        <div class="signin-content">
          <div class="signin-image">
            <figure><img src="/assets/images/signin-image.jpg" alt="sing up image" /></figure>
            <router-link :to="{ name: 'signUp' }" class="signup-image-link"
              >Create an account</router-link
            >
          </div>

          <div class="signin-form">
            <h2 class="form-title">Sign In</h2>
            <form method="POST" @submit.prevent="Login(Login_Form)" class="register-form" id="login-form">
              <div class="form-group">
                <label for="your_email"><i class="zmdi zmdi-account material-icons-name"></i></label>
                <input type="email" v-model="Login_Form.email"  id="your_email" placeholder="Your Email" />
              </div>
              <div class="form-group">
                <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                <input type="password" v-model="Login_Form.password" id="your_pass" placeholder="Password" />
              </div>
              <div class="form-group form-button">
                <input type="submit" name="signin" id="signin" class="form-submit" value="Log in" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import useAuthApi from '../../Api/Authentication/SignInSignUpAuth';
const { Login } = useAuthApi()
const Login_Form = ref({
 email: "",
 password : ""
})
</script>

<style scoped>
@import url('/assets/css/SignInSignUp.css');
</style>
