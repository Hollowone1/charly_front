import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue3-toastify/dist/index.css'

import App from './App.vue'
import router from './router'
import toast from './plugins/toast'

const app = createApp(App)

app.use(router)
app.use(toast)

app.mount('#app')
