<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/dashboard">Dashboard</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/underdev">Market Order</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/underdev">Matching</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/underdev">Settlement</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/underdev">Report/Delivery</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/underdev">Market Information</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/underdev">Market Mangement</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/underdev">System Setting</router-link>
                    </li>
                </ul>
                <div class="d-flex">
                    <button class="btn btn-outline-danger" v-if="getCurrentLogInUser||this.$store.state.accessToken" @click="signOut">Sign Out</button>
                    <router-link to="/signin" class="btn btn-success" v-else>Sign In</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
import axios from 'axios';
export default{
    data(){
        return{
            userToken:localStorage.getItem('userName'),
        }
    },
    methods:{
        async signOut(){
            const url = "http://localhost:5000/api/users/sign-out";
            console.error(localStorage.getItem("accessToken"));
            var myAccessToken = JSON.parse(localStorage.getItem("accessToken"));
            await axios.post(url,myAccessToken).then((output)=>{
                this.$store.commit('clearAccessToken');
                console.log(output);
                localStorage.removeItem("userName");
                localStorage.removeItem("accessToken");
                // this.$router.push({path:'/dashboard'});
                location.reload();
            }).catch((e)=>{console.log(e)});
        },
    },
    computed:{
        getCurrentLogInUser(){
            console.log("getCurrentLogInUser in below navbar");
            console.warn(this.userToken);
            return localStorage.getItem('userName')!=null?localStorage.getItem('userName'):null;
        }
    },
    watch:{
        userToken(){
            return localStorage.getItem('userName')!=null?localStorage.getItem('userName'):null;           
        }
    }
}
</script>