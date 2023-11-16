import axios from "axios";
import { ref } from "vue";
import { useTeacherStore } from "../../stores/teacher_store";
import { useTeacherDetailStore } from "../../stores/teacher_detail_store";
export default function useTeacherApi() {
    const teacher_course = ref(null)
    const teacher_store = useTeacherStore()
    const teacher_detail =useTeacherDetailStore()
    const getTeacherCourse = async()=>{
        axios.get("/getTeacherCourse/"+teacher_detail.$state.id,{headers:{
            Authorization:`Bearer ${teacher_store.token}`
        }}).then((response)=>{
        console.log("Data =>",response.data)
         teacher_course.value = response.data.Courses
        }).catch((error)=> {
            console.log(error)
        })
    }
    return{
        getTeacherCourse,
        teacher_course
    }
 }
