//import './assets/main.css'

import { createApp,watch } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from "axios"
import piniaPersist from 'pinia-plugin-persist'
const pinia = createPinia()

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://127.0.0.1:8000/api'

const app = createApp(App)
pinia.use(piniaPersist)
app.use(pinia)
app.use(router)

app.mount('#app')
