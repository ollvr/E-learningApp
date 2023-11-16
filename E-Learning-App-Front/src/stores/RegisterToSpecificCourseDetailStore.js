import { defineStore } from 'pinia'

export const useRegisterToSpecificCourseStore = defineStore('RegisterTospecificCoursestore', {
  state: () => ({
    teacher_id:0,
    course_name:"",
    course_description:"",
    course_img:"",
    VideoLink:""
  }),
  actions: {
    setCourseDetails(Course) {
        this.teacher_id = Course.teacher_id
        this.course_name =  Course.course_name
        this.course_description =  Course.course_description
        this.course_img =  Course.course_img,
        this.VideoLink = Course.VideoLink

    },
    ClearCourseDetails(){
        this.teacher_id = null
        this.course_name =  null
        this.course_description =  null
        this.course_img =  null
        this.VideoLink = null
    }
  },
  persist:{
    enabled:true
  }

})
