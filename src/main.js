import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import boostrap from 'bootstrap/dist/css/bootstrap.css'
import boostraps from 'bootstrap/dist/js/bootstrap'

createApp(App).use(router,boostrap,boostraps).mount('#app')
