<template>
  <div>
    <h1 style="color: green">Questions</h1>
    <div>
      <form @submit.prevent="SeeCourseAnsewers(answers, courseId)">
        <div>
          <div tyle="color:rgb(230, 102, 11)">
            <ul>
              <li v-for="(q, index) in Questions" :key="q">
                <h3 style="color: rgb(45, 40, 57)">{{ q.course_Questions }}</h3>
                <p>{{ q.QuestionSuggestions }}</p>
                <br />
                <label for="">Write your Ansewer Here</label>
                <p>Your Anserwer should be just a character example :( A,B,C,D)</p>
                <input
                  type="text"
                  v-model="answers[index]"
                  placeholder="Put an Ansewer here "
                />
              </li>
            </ul>
          </div>
        </div>
        <br />
        <button type="submit">Send Your Ansewers</button>
      </form>
    </div>
    <div v-if="ValidationMsg">
       <h4 style="color:brown">{{ ValidationMsg }}</h4>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import useCourseApi from "../../../Api/Courses/CourseApi";
import { useRoute } from "vue-router";

const { getCourseQuestions, Questions, SeeCourseAnsewers,ValidationMsg } = useCourseApi();
const router = useRoute();
const courseId = router.params.courseId;

const Data = getCourseQuestions(courseId);
const answers = ref([]);
onMounted(() => {
  getCourseQuestions(courseId);
});
</script>

<style scoped></style>
