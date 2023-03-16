<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

  <HelloWorld msg="Hello my name is manish shah i learning vue js"/>
  <Hello msg1="Hello msg1"/>
  <!-- <h2>{{msg1}}</h2> -->
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Hello from './components/Task.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,Hello
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
