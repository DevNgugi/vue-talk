
import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import router from './routes/web'
import {createPinia} from 'pinia'

import 'primeicons/primeicons.css';


const app= createApp(App)
const pinia=createPinia()
app.use(router)
app.use(pinia)
app.mount('#app')
