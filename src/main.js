import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import { createStore } from 'vuex'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'

// Create a new store instance.
const store = createStore({
    state () {
      return {
        accessToken : null
      }
    },
    mutations: {
      setAccessToken (state, accessToken) {
        state.accessToken = accessToken
      },
      clearAccessToken(state){
        state.accessToken = null
      }
    }
})

const app = createApp(App)

app.use(router)
app.use(bootstrap)
app.use(Vuex)
app.use(store)
app.mount('#app')
