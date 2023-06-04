<template>
    <div class="container">
    <div >
        <NavBar class="nav"></NavBar>
      </div>
   
        <h1 class="h1">Select a payment option</h1>
  
    <div class="payment-landing">
        
   
      <!-- <img src="../assets/logo.png"  alt=""> -->
      <div class="options">
        <router-link to="/upi" id="cart-link">
        <div class="option" @click="selectOption('credit-card')">
          <i class="far fa-credit-card"></i>
          <h2>Online Payment</h2>
          <p>Pay with your Visa or Mastercard</p>
        </div>
        </router-link>
        <router-link to="/upi" id="cart-link">
        <div class="option" @click="selectOption('paypal')">
          <i class="fab fa-paypal"></i>
          <h2>PayPal</h2>
          <p>Pay with your PayPal account</p>
        </div>
        </router-link>
        <router-link to="/CodPayment" id="cart-link">
        <div class="option" @click="selectOption('cash-on-delivery')">
          <i class="fas fa-money-bill-wave"></i>
          <h2>Cash on Delivery</h2>
          <p>Pay when your order is delivered</p>
        </div>
        </router-link>
      </div>
    </div>
</div>
  </template>
  
  <script>
  export default {
    name:'landingPage',
    data() {
      return {
        selectedOption: ''
      }
    },
    methods: {
      selectOption(option) {
        this.selectedOption = option;
        // Do something with the selected option, like navigating to a payment form
      }
    }
  }
  </script>
  
  <style>
  .payment-landing {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 85vh;
    background-image: url("../assets/logo.png" );
    background-size: cover; 
 
  }
  .header {
    text-align: center;
    margin-bottom: 50px;
  }
  .options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    

  }
  
 
  .option {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid #ccc;
    border-radius: 10px;
    padding: 30px;
    cursor: pointer;
    background-color: #eee;
  }
  .option:hover {
    opacity: .9;
  }
  .option i {
    font-size: 48px;
    margin-bottom: 20px;
  }
  .option h2 {
    margin-bottom: 10px;
  }
  body {
    height: 100%;
  /* Prevent scrolling */
  }
 
  </style>
  