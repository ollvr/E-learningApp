import { defineStore } from 'pinia'

export const useUserStore = defineStore('storeuser', {
  state: () => ({
    id:0,
    name: '',
    email: '',
    islogIn: false,
    token:""
  }),
  actions: {
    // since we rely on `this`, we cannot use an arrow function
    setUser(user,loggedIn,token) {
             this.id = user.id
              this.name = user.name,
              this.email = user.email,
              this.islogIn = loggedIn,
              this.token = token
    },
    ClearUser(){
        this.id = null,
        this.name = null,
        this.email = null,
        this.islogIn = false,
        this.token = null
    },
  },
  persist:{
    enabled:true
  }
})
