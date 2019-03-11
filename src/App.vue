<template>
  <div id="app">
    <div>
      <title_bar></title_bar>
    </div>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
// <nav>
// <sidebar> <--These go in template
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import title_bar from '@/components/title_bar'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

export default {
  name: 'App'
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
