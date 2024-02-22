import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.css'
import 'vue3-toastify/dist/index.css'

import App from './App.vue'
import router from './router'
import toast from './plugins/toast'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(toast)

app.mount('#app')
