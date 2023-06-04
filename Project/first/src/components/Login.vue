
<template>
  <div>
      <div class="box">
          <div class="inner-box">
            <div class="forms-wrap">
              <form autocomplete="off" class="sign-in-form">
                <div class="logo">
                  <img src="../assets/logo.png" alt="logo" />
                  <h4>Login</h4>
                </div>
  
                <div class="heading">
                  <h2>Welcome Back</h2>
                  <h6>Not registred yet?</h6>

                  <a class="toggle"><router-link to="/register" >Sign up</router-link></a>
                </div>
  
                <div class="actual-form">
                  <div class="input-wrap">
                    <input
                      type="email"
                      minlength="4"
                      placeholder="Email"
                      class="input-field"
                      autocomplete="off"
                      required
                      v-model="email"
                    />
                    
                  </div>
  
                  <div class="input-wrap">
                    <input
                      type="password"
                      minlength="4"
                      placeholder="Password"
                      class="input-field"
                      autocomplete="off"
                      required
                      v-model="password"
                    />
                  
                  </div>
  
                  <input type="submit" value="Sign In"   class="sign-btn" v-on:click="login" />
  
                  <p class="text">
                    Forgotten your password or you login datails?
                    <a class="help"  href="">Get help</a> signing in
                  </p>
                </div>

               
              </form>
  
            </div>
  
            <div class="carousel">
              <div class="images-wrapper">
                <img src="../assets/logo.png" class="image img-1 show" alt="" />
              </div>
            </div>
          </div>
        </div> 
  </div>
</template>

<script>
import Axios from "axios";

export default {
  name: "LoginForm",

  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },

  methods: {
    async login() {
      // Request payload for login
      const loginData = {
        email: this.email,
        password: this.password,
      };

      // Send POST request to backend / endpoint
   await Axios.post('/api/', loginData)
        .then((response) => {
          // Login successful
         
          localStorage.setItem("user-info",JSON.stringify(loginData))
          // console.log(result);
          this.$router.push({ name: 'Products' });
          console.log("Login successful:", response);
          alert(" congratulation Login Successful ");
          // TODO: Handle success scenario in frontend, e.g. show success message, redirect to a different page, etc.
        })
        .catch((error) => {
          // Login failed
          if (error.response) {
            // Handle known response codes
            if (error.response.status === 404) {
              alert("User not found");
            } else if (error.response.status === 401) {
              alert("Invalid password");
            } else {
              alert("Login failed");
            }
          } else if (error.request) {
            // Handle Axios request errors
            this.error = "Request error: " + error.request;
          }
          console.error("Login error:", error);
        });
    },
  },

  mounted()
{
  let user=localStorage.getItem('user-info')
  if(user){
    this.$router.push({name:'Products'})
  }
},
};
</script>



<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");

*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body,
input {
  font-family: "Poppins", sans-serif;
}


.box {
    margin: auto;
    padding:auto;
    display:flex;
    justify-content: center;
    align-items:center;

  position: relative;
  width: 100%;
  max-width: 1020px;
  height: 640px;
  background-color: #fff;
  border-radius: 3.3rem;
  box-shadow: 0 60px 40px -30px rgba(0, 0, 0, 0.27);
}

.inner-box {
   
  position: absolute;
  width: calc(100% - 4.1rem);
  height: calc(100% - 4.1rem);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.forms-wrap {
  position: absolute;
  height: 100%;
  width: 45%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  transition: 0.8s ease-in-out;
}

form {
  max-width: 260px;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  transition: opacity 0.02s 0.4s;
}


.logo img {
  width: 47px;
  margin-right: 0.3rem;
}

.logo h4 {
  font-size: 1.1rem;
  margin-top: -9px;
  letter-spacing: -0.5px;
  color: #151111;
}

.heading h2 {
  font-size: 2.1rem;
  font-weight: 600;
  color: #151111;
}

.heading h6 {
  color: #bababa;
  font-weight: 400;
  font-size: 0.75rem;
  display: inline;
}

.toggle {
  color: #151111;
  text-decoration: none;
  font-size: 0.75rem;
  font-weight: 500;
  transition: 0.3s;
}

.toggle:hover {
  color: #8371fd;
}

.input-wrap {
  position: relative;
  height: 37px;
  margin-bottom: 2rem;
}

.input-field {
  position: absolute;
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  outline: none;
  border-bottom: 1px solid #bbb;
  padding: 0;
  font-size: 0.95rem;
  color: #151111;
  transition: 0.4s;
}

label {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.95rem;
  color: #bbb;
  pointer-events: none;
  transition: 0.4s;
}

.sign-btn {
  display: inline-block;
  width: 100%;
  height: 43px;
  background-color: #151111;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 0.8rem;
  font-size: 0.8rem;
  margin-bottom: 2rem;
  transition: 0.3s;
}

.sign-btn:hover {
  background-color: #8371fd;
}

.text {
  color: #bbb;
  font-size: 0.7rem;
}

.text a {
  color: #bbb;
  transition: 0.3s;
}

.text a:hover {
  color: #8371fd;
}



.carousel {
  position: absolute;
  height: 100%;
  width: 55%;
  left: 45%;
  top: 0;

  border-radius: 2rem;
  display: grid;
  grid-template-rows: auto 1fr;
  padding-bottom: 2rem;
  overflow: hidden;
  transition: 0.8s ease-in-out;
}



.image {
  width: 100%;
  grid-column: 1/2;
  grid-row: 1/2;
  opacity: 0;
  transition: opacity 0.3s, transform 0.5s;
}

.img-1 {
  transform: translate(0, -50px);
}



.image.show {
  opacity: 1;
  transform: none;
}



.text-wrap {
  max-height: 2.2rem;
  overflow: hidden;
  margin-bottom: 2.5rem;
}

.text-group {
  display: flex;
  flex-direction: column;
  text-align: center;
  transform: translateY(0);
  transition: 0.5s;
}

.text-group h2 {
  line-height: 2.2rem;
  font-weight: 600;
  font-size: 1.6rem;
}


@media (max-width: 850px) {
  .box {
    height: auto;
    max-width: 550px;
    overflow: hidden;
  }

  .inner-box {
    position: static;
    transform: none;
    width: revert;
    height: revert;
    padding: 2rem;
  }

  .forms-wrap {
    position: revert;
    width: 100%;
    height: auto;
  }

  form {
    max-width: revert;
    padding: 1.5rem 2.5rem 2rem;
    transition: transform 0.8s ease-in-out, opacity 0.45s linear;
  }

  .heading {
    margin: 2rem 0;
  }



  .carousel {
    position: revert;
    height: auto;
    width: 100%;
    padding: 3rem 2rem;
    display: flex;
  }

  .images-wrapper {
    display: none;
  }

  .text-slider {
    width: 100%;
  }
}

@media (max-width: 530px) {
  main {
    padding: 1rem;
  }

  .box {
    border-radius: 2rem;
  }

  .inner-box {
    padding: 1rem;
  }

  .carousel {
    padding: 1.5rem 1rem;
    border-radius: 1.6rem;
  }

  .text-wrap {
    margin-bottom: 1rem;
  }

  .text-group h2 {
    font-size: 1.2rem;
  }

  form {
    padding: 1rem 2rem 1.5rem;
  }
}

</style>