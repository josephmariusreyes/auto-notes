import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './app/router/index.ts'
import '../node_modules/tw-animate-css/dist/tw-animate.css'
import './app/styles/globals.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
