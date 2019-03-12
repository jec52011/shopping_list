<template>
  <div id="app">
    <TitleBar></TitleBar>
    <router-view/>
  </div>
</template>

<script>
// <nav>
// <sidebar> <--These go in template
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import TitleBar from '@/components/TitleBar.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

export default {
  name: 'App',
  components: {
    TitleBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
