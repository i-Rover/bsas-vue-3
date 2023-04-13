// Create a new store instance.
import { createStore } from 'vuex'
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
export default store