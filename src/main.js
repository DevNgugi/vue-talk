
import { createApp } from 'vue'
import { createRouter,createWebHistory } from 'vue-router'
import App from './App.vue'
import LoginView from './views/LoginView.vue'
import HomeView from './views/HomeView.vue'
import './assets/main.css'
import router from './routes/web'

const app= createApp(App)

app.use(router)
app.mount('#app')
