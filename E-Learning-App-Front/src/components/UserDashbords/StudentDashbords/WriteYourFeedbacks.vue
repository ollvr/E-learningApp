<template>
    <div class="feedback-form">
       <form method="post" @submit.prevent="writeFeedback(FeedBack)">
        <label for="feedback" class="form-label">Write Your Feedback Here:</label>
        <textarea id="feedback" v-model="FeedBack.feedback" class="form-textarea" cols="30" rows="10"  required></textarea>
        <button type="submit" class="submit-button">Send Feedback</button>
       </form>

       <div v-if="Msg" class="message">
           <p>{{ Msg }}</p>
       </div>
    </div>
</template>

<script setup>

import { ref } from 'vue';
import useStudentApi from '../../../Api/UsersDashbordsApi/StudentApi';
import { useStudentDetailStore } from '../../../stores/student_detail_store';

const Student_Store = useStudentDetailStore()
const {writeFeedback,Msg} = useStudentApi()

const FeedBack = ref({
    student_id:Student_Store.$state.id,
    feedback:""
})
</script>

<style  scoped>
.feedback-form {
    width: 80%;
    max-width: 600px;
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

/* Form textarea */
.form-textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    resize: vertical;
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
    margin-top: 10px;
}

.submit-button:hover {
    background-color: #0056b3;
}

/* Message display */
.message {
    font-size: 18px;
    color: #333;
    margin-top: 20px;
    text-align: center;
}
</style>
