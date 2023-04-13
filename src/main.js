import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import store from './modules/store.js'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)
// Create a new store instance.
app.use(router)
app.use(bootstrap)
app.use(Vuex)
app.use(store)
app.mount('#app')
