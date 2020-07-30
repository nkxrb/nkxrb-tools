<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <bud-button>an扭xxxxxxxxx</bud-button>
  </div>
</template>

<script>
import { createApp } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import { BudButton } from '../../dist/budgiant/budgiant-ui.esm.js'
createApp(BudButton)

export default {
  name: 'App',
  components: {
    HelloWorld, BudButton
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
