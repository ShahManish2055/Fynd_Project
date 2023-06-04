<template>
  <div id="app">
    <!-- <NavBar/> -->
    <router-view/>
  </div>
</template>

<script>
// import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    // NavBar,
  
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    font-family: Arial;
     text-decoration: none;
  }

 

  button {
   
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    outline: 0;
    padding: 16px;
  }
</style>
