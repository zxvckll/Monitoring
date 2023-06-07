import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import routes from './routes/index.js'
import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'

createApp(App).use(VueChartkick).use(routes).mount('#app')
