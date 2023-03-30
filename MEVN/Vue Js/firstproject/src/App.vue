<!-- <template> -->
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

  <!-- <HelloWorld msg="Hello my name is manish shah i learning vue js"/>
  <Hello msg1="Hello msg1"/> -->
  <!-- <Hello1 msg2="This is the fruits list component"/> -->
  <!-- <div id="app">
    <Hello1 />
    <ul>
      <li> Apple</li>
      <li> Banana</li>
      <li> Mango</li>
      <li> orange</li>
     
    </ul>
    
  </div> -->
  <!-- <h2>{{msg1}}</h2> -->
  <!-- <div id="app">
    <Main />
  </div>
</template>
-->
<!-- <script> 
// import HelloWorld from './components/HelloWorld.vue'
// import Hello from './components/Task.vue'
// import Hello1 from './components/TestTask2.vue'
// import Main from './components/MainApp.vue'

// export default {
//   name: 'App',
//   components: {
//     Main
//     // Hello1
//   }
// }
// </script> -->

<!-- <style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
    background-color: aqua;
  margin-top: auto;
}
</style> -->
<template>
  <div>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
ul{
  display: flex; 
justify-content: center;
list-style-type: none;
background-color: azure;

}
ul li{
  padding: 10px;
 
}
</style>