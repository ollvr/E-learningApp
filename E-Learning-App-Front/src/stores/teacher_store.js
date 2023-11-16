import { defineStore } from 'pinia'

export const useTeacherStore = defineStore('storeteacher', {
  state: () => ({
    id:"",
    name: '',
    email: '',
    islogIn: false,
    token: ''
  }),
  actions: {
    // since we rely on `this`, we cannot use an arrow function
    setUser(user, loggedIn, token) {
      this.id = user.id
      this.name = user.name,
      this.email = user.email
      this.islogIn = loggedIn,
      this.token = token
    },

    ClearTeacher(){
        this.id = null,
        this.name = null,
        this.email = null,
        this.islogIn = false,
        this.token = null
    }
  },
  persist:{
    enabled:true
  }

})
