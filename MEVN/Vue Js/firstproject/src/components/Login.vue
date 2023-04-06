
<template>
    <div>
        <form action="" class="form">
      UserName :  <input type="text" v-model="loginForm.username" name="username" placeholder="Enter username">
        <br>
        <br>
      Password :  <input type="text" v-model="loginForm.password" name="password" placeholder="Enter password">
        <br>
        <br>
        <button class="btn" v-on:click="loginData">Login</button>
    </form>
    </div>
</template>

<script>
export default {
    name:'LoginForm',
    methods:{
        loginData(){
            console.log(this.loginForm.username,this.loginForm.password)
        },
    },
    data(){
return{loginForm:{
    username:null,
    password:null
}}
    }
}
</script>

<style>
.btn{
    margin-left:6rem;
    margin-top: 2rem;
    background-color: green;
    color: white;
    border-radius: 4px;
    width: 40%;
    border:solid 
}

</style>