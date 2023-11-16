import { defineStore } from 'pinia'

export const useStudentDetailStore = defineStore('storeStudentDetails', {
  state: () => ({
    id:0,
    user_id : 0,
    city:"",
    university_name:"",
    other:""
  }),
  actions: {
    setStudent(Student) {
        this.id = Student.id,
        this.user_id = Student.user_id
        this.city = Student.city
        this.university_name = Student.university_name
        this.other = Student.other

    },
    ClearStudentDetails(){
        this.id = null,
        this.user_id = null,
        this.city = null,
        this.university_name = null,
        this.other = null
    }
  },
  persist:{
    enabled:true
  }

})
