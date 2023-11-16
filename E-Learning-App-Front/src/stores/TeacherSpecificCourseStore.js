import { defineStore } from 'pinia'

export const useTeacherSpecificCourseStore = defineStore('teacherSpecificCourseStore', {
  state: () => ({
    course_name:"",
    course_description:"",
    course_img:"",
    course_price:"",
    course_feedback:"",
    registration_date:"",
    certified:""
  }),
  actions: {
    setSpecificCourseData(Course) {
        this.course_name =  Course.course_name
        this.course_description =  Course.course_description
        this.course_img =  Course.course_img
        this.course_price =  Course.course_price
        this.course_feedback =  Course.course_feedback,
        this.registration_date =  Course.registration_date,
        this.certified =  Course.certified

    },
    CleanSpecificCourseData(){
        this.course_name =  null
        this.course_description =  null
        this.course_img =  null
        this.course_price = null
        this.course_feedback =  null,
        this.registration_date = null,
        this.certified =  null
    }
  },
  persist:{
    enabled:true
  }

})
