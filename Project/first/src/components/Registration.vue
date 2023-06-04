<!-- RegistrationForm.vue -->
<template>
  <div>
      <div class="box">
          <div class="inner-box">
            <div class="forms-wrap">
  
              <div 
              autocomplete="off" class="sign-up-form">
                <div class="logo">
                  <img src="../assets/logo.png" alt="logo" />
                  <h4>Registration</h4>
                </div>
  
                <div class="heading">
                  <h2>Get Started</h2>
                  <h6>Already have an account?</h6>
                  <a class="toggle"><router-link to="/" >Sign in</router-link></a>
                </div>
  
                <div class="actual-form">
                  <div class="input-wrap">
                    <input
                      type="text"
                      minlength="4"
                      class="input-field"
                      autocomplete="off"
                      v-model="name"
                      placeholder="Name"
                      required
                    />
                 
                  </div>
  
                  <div class="input-wrap">
                    <input
                      type="email"
                      class="input-field"
                      autocomplete="off"
                      placeholder="Email"
                      v-model="email"
                      required
                    />
                  
                  </div>
  
                  <div class="input-wrap">
                    <input
                      type="password"
                      minlength="4"
                      class="input-field"
                      autocomplete="off"
                      placeholder="Password"
                      v-model="password"
                      required
                    />
                  
                  </div>
 
                  <input type="submit" value="Sign Up" class="sign-btn" v-on:click="register" />
                
  
                  <p class="text">
                    By signing up, I agree to the
                    <a href="#">Terms of Services</a> and
                    <a href="#">Privacy Policy</a>
                  </p>
                </div>
              </div>
            </div>
  
            <div class="carousel">
                <img src="../assets/logo.png" class="image img-1 show" alt="" />
            </div>
          </div>
        </div>
  </div>
</template>

<script>
import Axios from 'axios';


export default {
  name:"registrationLogin",
  methods: {
    async register() {
    // Request payload for registration
    const registrationData = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    // Send POST request to backend /register endpoint
    await Axios.post('/api/register', registrationData)
      .then(response => {
        // Registration successful
        console.log('Registration successful:',response,registrationData);
        // console.log(result);
        this.$router.push({ name: 'LoginRegistration' });
        localStorage.setItem("user-info",JSON.stringify( registrationData));
        alert("congratulation Registration Successful..");
        
        // TODO: Handle success scenario in frontend
      })
      .catch(error => {
        // Registration failed
        // console.error('Registration error:', error);
        if(error.response.status==409){
          alert("this account is already registered");
        }
        // TODO: Handle error scenario in frontend
      });
  }
  },
  mounted()
{
  let user=localStorage.getItem('user-info')
  if(user){
    this.$router.push({name:'Products'})
  }
},
  }
</script>


