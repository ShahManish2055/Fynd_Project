<template>
  <div>
    <div class="container"> 
  
  <div id="nav-bar"> 
    <img class="img1" src="../assets/logo1.png" alt="">   
    <router-link to="/products" id="products-link">
      <h1><span class="s1">S</span><span class="s0">G  </span>  <span class="s2"> FOOT</span><span class="s3">WEAR</span></h1>
     
    </router-link>
  </div>
  <!-- <marquee class='m' behavior="scroll" direction="up" scrollamount="5">Welcome to Shah Group Pvt Ltd</marquee> -->
  <router-link to="/cart" id="cart-link">
    <button>Shopping Cart</button>
  </router-link>
  <div class="Home">
    <router-link to="/About" id="cart-link">
      <button>About</button>
    </router-link>

  </div>
  <div class="product">
    <router-link to="/Contact" id="cart-link">
      <button>Contact</button>
    </router-link>
  </div>
 
    <div class="dropdown">
      <div class="dropbtn"><img src="../assets/profile.png"> </div>
      <h4>{{email}}</h4>
      <div class="dropdown-content">
        <a  v-on:click="logout">Logout</a>
      </div>
    </div>
    
  </div>
  </div>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
    return {
    
    email:""
    }; 
  },
    methods:{
      logout() {
      localStorage.clear();
      this.$router.push({ name: "LoginRegistration" });
    },
    },
    mounted() {
    let user = localStorage.getItem("user-info");
    this.email = JSON.parse(user).email;
    if (!user) {
      this.$router.push({ name: "LoginRegistration"});
    }
  },
}
</script>

<style scoped>


.s1{
  color: #c17648;
}
.s0{
  color: #52bf94;
}
.s2{

 color:#5f4299;
}
.s3{
  color: #ccb852;
}
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.img1{
  margin: 10px;
  margin-right: 10px;
  animation-name: spin;
  animation-duration: 3000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  border-radius: 50%;
 
}
  #nav-bar {
  
    height: 75px;
    width: 100%;
  }

  #products-link {
    text-align: center;
    display: block;
    color: black;
    font-size: 22px;
    left: 32px;
    position: absolute;
    top: 16px;
    text-decoration: none;
    margin-left: 45px;
    margin-top:12px;;
  }

  #products-link h1 {
      margin: 0;
  }

  #cart-link {
   display: flex;
   justify-content: flex-end;
   margin-top:17px;
   margin-right: 10px;
   text-decoration: none;
   height: 55px;
   width: 100%;
  }



  .dropdown {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
    margin-left: 20px;
  }
  
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
  
    
  }
  
  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  
 
  
  .dropdown:hover .dropdown-content {display: block;}

img{
  width:60px;
  border-radius: 20px;
 
  margin-top:10px;
 
  
}
  .container{
    display:flex;
  background-color:rgb(206, 220, 233);
  
  }

  button {
    background-color:#968ec1;
    color: black;
   
  }
  button:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  }
 
  h4{
    color:black;
  }
</style>
