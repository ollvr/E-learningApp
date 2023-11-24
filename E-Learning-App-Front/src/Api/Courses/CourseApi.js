/* eslint-disable no-unused-vars */
import axios from 'axios'
import { ref } from 'vue'
import { useStudentDetailStore } from '../../stores/student_detail_store'
import { useUserStore } from '../../stores/user_store'
import { useTeacherStore } from '../../stores/teacher_store'
import { useRegisterToSpecificCourseStore } from '../../stores/RegisterToSpecificCourseDetailStore'
import { useTeacherSpecificCourseStore } from '../../stores/TeacherSpecificCourseStore'
import { useRouter, useRoute } from 'vue-router'


export default function useCourseApi() {
    const router = useRouter()
  const All_Teachers_Courses = ref(null)
  const StudentCourses = ref(null)
  const student_store = useStudentDetailStore()
  const store = useUserStore()
  const teacher_store = useTeacherStore()
  const token = store.$state.token
  const certifs = ref(null)
  const courseCreatedMsg = ref(null)
  const Register_to_course_msg = ref(null)
  const Course = ref([])
  const Register_course_store = useRegisterToSpecificCourseStore()
  const teacher_specific_course_store = useTeacherSpecificCourseStore()
  const MsgQuestionCreations = ref('')
  const CourseLinks = ref([])
  const Questions = ref([])
  const ValidationMsg = ref("")
  
  // teachers api methods
  const getAllTeachersCourses = async () => {

    axios
      .get('/GetAllCourses')
      .then((response) => {
        console.log(response.data)
        All_Teachers_Courses.value = response.data.PublishedTeacherCourses
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const addCourse = async (CourseData) => {
    axios.post('/addCourse', CourseData, {
      headers: {
        Authorization: `Bearer ${teacher_store.token}`
      }
    }).then((response)=>{
      console.log("Server Response => ",response.data)
      courseCreatedMsg.value = response.data.msg;
    }).catch((error)=>{ console.log(error)})
  }
  // Student Part
  // get courses registred by specific student
  const getStudentCourse = async () => {
    axios
      .get('/getStudentCourse/' + student_store.id, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((resp) => {
        StudentCourses.value = resp.data.StudentCourses
      })
      .catch((error) => {
        console.log(error)
      })
  }

  // get student certification

  const getStudentCertif = async () => {
    axios
      .get('/getAllStudentCertification/' + student_store.$state.id, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((resp) => {
        console.log(resp.data)
        certifs.value = resp.data.Certification
      })
      .catch((error) => {
        console.log(error)
      })
  }

  // Student Register to a course
  const Register_to_Course = async (course_id, student_id) => {

      axios
        .post(
          '/Register_To_Course',
          {course_id,student_id},
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )
        .then((response)=>{
            console.log(response.data)
            Register_to_course_msg.value = response.data.Msg
            if(response.data.course_registred !== null  || response.data.NotCertified == true){
                axios.get("/GetCourse/"+course_id,{headers:{
                    Authorization:`Bearer ${token}`
                }}).then((response)=>{
                    Register_course_store.setCourseDetails(response.data.Course)
                }).catch((error)=>{console.log(error)})
                router.push({name:'CourseDetails',params:{courseId:course_id}})
            }

        }).catch((error)=>{ console.log(error)})

  }

  const GetCourse = async (courseId) => {
    axios
      .get('/GetCourse/' + courseId, {
        headers: {
          Authorization: `Bearer ${teacher_store.token}`
        }
      })
      .then((response) => {
        console.log(response.data.Course)
        Course.value.push(response.data.Course)
        teacher_specific_course_store.setSpecificCourseData(response.data.Course)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const addQuestionToCourse = async (formdata) => {
    axios
      .post('/addQuestionsTo_A_Course', formdata, {
        headers: {
          Authorization: `Bearer ${teacher_store.token}`
        }
      })
      .then((resp) => {
        MsgQuestionCreations.value = resp.data.Msg
        console.log(resp.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const getCourseVideos = async (course_id) => {
    axios
      .get('/getCourseVideos/' + course_id, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((resp) => {
        console.log('Questions => ', resp.data.CourseLinks)
        CourseLinks.value.push(resp.data.CourseLinks)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const getCourseQuestions = async (courseId) => {
    axios
      .get('/getCourseQuestions/' + courseId, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((resp) => {
        Questions.value = resp.data.CourseQuestions
        console.log(resp.data)
      }).catch((error)=>{console.log(error)})
  }

  const SeeCourseAnsewers = async (UserAnsewers,courseId,student_id) => {
    let number_of_wrong_ansewers = 0;
    let number_of_correct_ansewers = 0;

    axios
      .post('/SendAnsewers/'+courseId,{UserAnsewers,courseId,student_id},{
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((resp) => {
        console.log("UserAnsewers =>" , UserAnsewers)
        console.log("CourseId => ",courseId)
        console.log("Response from the server => ",resp.data)
        number_of_correct_ansewers = resp.data.CorrectAnsewers;
        number_of_wrong_ansewers = resp.data.WrongAnsewer;
        if(number_of_wrong_ansewers > 0){
            ValidationMsg.value = "Test Failed You have "+number_of_wrong_ansewers + "Wrong Ansewers";
        }
        else{
            ValidationMsg.value = "Congragulations Test Passed Succefully ";
            router.push({name:'studentCertif'})
        }
      }).catch((error)=>{console.log(error)})
  }



  return {
    getAllTeachersCourses,
    All_Teachers_Courses,
    getStudentCourse,
    StudentCourses,
    getStudentCertif,
    certifs,
    addCourse,
    courseCreatedMsg,
    Register_to_Course,
    Register_to_course_msg,
    GetCourse,
    Course,
    addQuestionToCourse,
    MsgQuestionCreations,
    getCourseVideos,
    CourseLinks,
    getCourseQuestions,
    Questions,
    SeeCourseAnsewers,
    ValidationMsg
  }
}
