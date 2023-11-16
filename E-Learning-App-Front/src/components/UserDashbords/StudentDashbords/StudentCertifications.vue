<template>
    <div>
        <h1 style="color:red">This is where you find your Certifications </h1>
    <div class="certification" v-for="certif in certifs" :key="certif">
        <h1>Certificate of Achievement</h1>
        <div class="recipient">This is to certify that</div>
        <div class="recipient"><strong>{{ user_store.name }}</strong></div>
        <div class="date">has successfully completed the course on {{ certif.course_name }}</div>
        <div class="date"><strong>{{ certif.registration_date }}</strong></div>
        <div class="signature">
            <p>Signature</p>
        </div>
        <div class="issuer">Instructed by : {{ certif.name }}</div>
        <div class="issuer">Issued by: T3alam Acadimy</div>
    </div>
    </div>

</template>

<script setup>
import { onMounted } from 'vue';
import useCourseApi from '../../../Api/Courses/CourseApi';
import { useUserStore } from '../../../stores/user_store';
const user_store = useUserStore()
const {getStudentCertif,certifs} = useCourseApi()

onMounted(()=>{
    getStudentCertif()
})
</script>

<style  scoped>
.certification {
    width: 80%;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 2px solid #3498db;
    border-radius: 10px;
    text-align: center;
    font-family: Arial, sans-serif;
}

/* Certificate title */
.certification h1 {
    color: #3498db;
    font-size: 24px;
    margin-bottom: 20px;
}

/* Recipient name */
.recipient {
    font-size: 18px;
    margin: 10px 0;
}

/* Date */
.date {
    font-size: 16px;
    margin: 10px 0;
}

/* Signature */
.signature {
    margin-top: 40px;
    border-top: 1px solid #3498db;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
}

/* Issuer's name */
.issuer {
    font-size: 14px;
    margin-top: 10px;
}

</style>
