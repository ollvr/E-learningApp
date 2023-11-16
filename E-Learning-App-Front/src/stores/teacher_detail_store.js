import { defineStore } from 'pinia'

export const useTeacherDetailStore = defineStore('storeteacherDetails', {
  state: () => ({
    id:"",
    teacher_job:"",
    user_id : 0
  }),
  actions: {
    setTeacher(teacher) {
        this.id = teacher.id,
        this.teacher_job = teacher.teacher_job
        this.user_id = teacher.user_id
    },
    ClearTeacherDetails(){
        this.id = null,
        this.teacher_job = null,
        this.user_id = null
    }
  },

  persist:{
    enabled:true
  }
})
