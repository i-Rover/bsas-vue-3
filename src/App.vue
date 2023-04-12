<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import TopNavbar from './views/Widget/TopNavbar.vue'
import BelowNavbar from './views/Widget/BelowNavbar.vue'
import 'bootstrap-icons/font/bootstrap-icons.css'
</script>

<template>
  <TopNavbar />
  <BelowNavbar />
  <router-link to="/dashboard"></router-link>
  <router-view></router-view>
</template>

<style scoped>
</style>
