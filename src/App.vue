<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import TopNavbar from './views/Widget/TopNavbar.vue'
import BelowNavbar from './views/Widget/BelowNavbar.vue'
import Dashboard from './views/Content/Dashboard.vue'
import Action from './views/Content/Action.vue'
import 'bootstrap-icons/font/bootstrap-icons.css'
</script>

<template>
  <TopNavbar />
  <BelowNavbar />
  <Dashboard />
  <Action />
</template>

<style scoped>
</style>
