<template>
    <div class="container-fluid" style="background-color: #f2f2f2;height:100vh;">
        <div class="d-flex justify-content-center">
            <div class="card mt-3">
                <div class="card-body" style="width:500px;">
                    <h5 class="card-title">User Login</h5>
                    <hr>
                    <div class="mb-3">
                        <label for="username" class="form-label">User Name</label>
                        <input type="text" class="form-control" id="username" placeholder="Enter Your User Name..."
                            v-model="state.username">
                        <span style="color:red;" v-if="this.v$.username.$error">*{{ this.v$.username.$errors[0].$message
                        }}</span>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="text" class="form-control" id="email" placeholder="Enter Your User Email..."
                            v-model="state.email">
                        <span style="color:red;" v-if="this.v$.email.$error"> *{{ this.v$.email.$errors[0].$message }}
                        </span>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Enter Your User Password..."
                            v-model="state.password">
                        <span style="color:red;" v-if="this.v$.password.$error">* {{ this.v$.password.$errors[0].$message }}
                        </span>
                    </div>
                    <hr>
                    <div class="d-grid gap-2">
                        <button class="btn btn-primary" type="button" @click="submitForm" v-if="hide">Sign In</button>
                        <button class="btn btn-primary" type="button" disabled v-if="seen">
                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            <span class="visually-hidden"> Loading...</span>
                        </button>
                        <router-link to="/signup" class="btn btn-outline-primary">Sign Up</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import useValidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import axios from 'axios'
import { reactive, computed } from 'vue'
export default {
setup() {
    const state = reactive({
        email: '',
        password: '',
        username: '',
    })
    const rules = computed(() => {
        return {
            email: { required, email },
            password: { required },
            username: { required },
        }
    })
    const v$ = useValidate(rules, state);
    return { state, v$ }
},
data() {
    return {
        v$: useValidate(),
        username: '',
        email: '',
        password: '',
        seen:false,
        hide:true,
    }
},
methods: {
    submitForm() {
        console.log(this.v$);
        this.v$.$validate()
        if (!this.v$.$error) {
            this.signInNow();
        }
    },
    async signInNow(){
        this.hide = false;
        this.seen = true;
        const url = "http://localhost:5000/api/users/sign-in";
        let data = {
            "email"         : this.state.email,
            "username"      : this.state.username,
            "password"      : this.state.password,
            "newPassword"   : this.state.password            
        }
        console.log(data);
        await axios.post(url, data)
        .then((output)=>{
            console.log(output);
            this.seen = false;
            this.hide = true;
            this.$store.commit('setAccessToken',output);
            this.$router.push({path:'/dashboard'});
        })
        .catch((e)=>{console.log(e);this.seen = false;this.hide=true;});
    },
},
validations() {
    return {
        username: { required },
        email: { required, email },
        password: { required }
    }
}
}
</script>