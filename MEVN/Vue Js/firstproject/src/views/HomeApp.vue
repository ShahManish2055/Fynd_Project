<template>
  <div>
    <div class="container">
    <h1>Home Page</h1>
    <p>Welcome to the home page!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus at, id minima laboriosam repudiandae quis impedit soluta eaque dolore. Illum quasi officiis ipsam voluptatem, beatae minima vitae corrupti unde. Illum dolor quam ut maxime, nemo cumque beatae, quod quis quaerat doloremque, cum aut vero repellat voluptates adipisci minus itaque ad nesciunt aliquid reiciendis assumenda laudantium esse! Aliquam ab labore esse earum tempore nam consequuntur. Excepturi voluptatibus assumenda exercitationem obcaecati? Eveniet magni, magnam fugit blanditiis nisi ea laborum quaerat autem ut provident necessitatibus, id, excepturi minus fugiat odit ex? Nulla facere facilis eum omnis, nihil culpa accusantium vero vitae fugit nam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem fugit delectus, provident non quibusdam voluptatum vel dicta et, quasi, reprehenderit rem asperiores quos possimus mollitia! Eum ab dolorum maiores perferendis eaque quia magnam, numquam culpa iste facilis quae, voluptatibus ex.
    </p>
  </div>
</div>
</template>

<script>
export default {
  name: 'HomeA'
}
</script>

<style>
.container{
  background-color: antiquewhite;
 text-align: center;
}
</style>
<!-- <template>
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
</script> -->

<!-- <template>
  <div>
   
    <h2>Login Page</h2><br>
    <div class="login">
    <form id="login" method="get" action="login.php">
        <label><b>User Name
        </b>
        </label>
        <input type="text" name="Uname" id="Uname" placeholder="Username">
        <br><br>
        <label><b>Password
        </b>
        </label>
        <input type="Password" name="Pass" id="Pass" placeholder="Password">
        <br><br>
        <input type="button" @click="redirectToAbout" name="log" id="log" value="Log In Here">
        <br><br> -->
        <!-- <button >Register</button> -->
        <!-- <input type="checkbox" id="check"> -->
        <!-- <span>Remember me</span>
        <br><br>
        Forgot <a href="#">Password</a> -->
    <!-- </form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    redirectToAbout() {
      this.$router.push('/Registration')
    }
  }
}
</script> -->

<!-- <style>
body
{
    margin: 0;
    padding: 0;
    background-color:#6abadeba;
    font-family: 'Arial';
}
.login{
        width: 382px;
        overflow: hidden;
        margin: auto;
        margin: 20 0 0 450px;
        padding: 80px;
        background: #23463f;
        border-radius: 15px ;

}
h2{
    text-align: center;
    color: #277582;
    padding: 20px;
}
label{
    color: #08ffd1;
    font-size: 17px;
}
#Uname{
    width: 300px;
    height: 30px;
    border: none;
    border-radius: 3px;
    padding-left: 8px;
}
#Pass{
    width: 300px;
    height: 30px;
    border: none;
    border-radius: 3px;
    padding-left: 8px;

}
#log{
    width: 300px;
    height: 30px;
    border: none;
    border-radius: 17px;
    padding-left: 7px;
    color: blue;


}
span{
    color: white;
    font-size: 17px;
}
a{
    float: right;
    background-color: grey;
}

</style> -->
