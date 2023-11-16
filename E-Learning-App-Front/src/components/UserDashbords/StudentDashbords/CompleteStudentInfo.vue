<template>
  <div>
    <div class="form-container">
      <h1>University Information</h1>
      <form @submit.prevent="CompeleteLoginStudent(Complete_Student_details)">
        <label for="city" class="form-label">City:</label>
        <input type="text" id="city" v-model="Complete_Student_details.city" class="form-input"  />

        <label for="university" class="form-label">University Name:</label>
        <input
          type="text"
          id="university"
          name="university"
          class="form-input"
          v-model="Complete_Student_details.university_name"
        />

        <label for="other" class="form-label">Other(Self-taught,employed) put here</label>
        <input type="text"
        id="other"
        class="form-input"
        v-model="Complete_Student_details.other" />

        <button type="submit" class="submit-button">Submit</button>
      </form>
    </div>

    <div v-if="UpdateMessage">
        <h3 style="text-align:center;color:red">{{ UpdateMessage }}</h3>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import useAuthApi from "../../../Api/Authentication/SignInSignUpAuth";

const {CompeleteLoginStudent,UpdateMessage } = useAuthApi()
const Complete_Student_details = ref({
    city:"",
    university_name:"",
    other:""
})
</script>

<style scoped>
/* Form container */
.form-container {
  width: 80%;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  font-family: Arial, sans-serif;
}

/* Form label */
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

/* Submit button */
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
