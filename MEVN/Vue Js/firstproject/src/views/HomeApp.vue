<!-- <template>
  <div>
    <h1>Home Page</h1>
    <p>Welcome to the home page!</p>
  </div>
</template>

<script>
export default {
  name: 'HomeA'
}
</script> -->

<template>
  <div>
    <form @submit.prevent="login">
      <label>
        Username:
        <input type="text" v-model="username">
      </label>
      <label>
        Password:
        <input type="password" v-model="password">
      </label>
      <button type="submit">Log In</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      axios.post('/login', {
        username: this.username,
        password: this.password
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    }
  }
}
</script>
