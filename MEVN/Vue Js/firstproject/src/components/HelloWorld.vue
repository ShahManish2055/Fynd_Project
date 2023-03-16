<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{msg1}}</h2>
    <ul>
      <li><a href="https://community.fynd.academy/?tab=Posts" target="_blank" rel="noopener"></a>Pensil</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  // shah:'shah this is my surname',
  props: {
    msg: String,
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
