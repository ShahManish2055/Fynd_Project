<template>
    <div class="Hello1">
      <h2>{{msg2}}</h2>
      
    </div>
  </template>
  
  <script >
  export default {
    name: 'HelloProject',
    props: {
      msg2: String ,
     
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .Hello1 {
    background-color:burlywood;
    color: white;
  }
  
  </style>
  