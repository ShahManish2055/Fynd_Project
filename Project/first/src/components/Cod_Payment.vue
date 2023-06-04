<template>
    <div>
    <div class="container">
        <div >
            <NavBar class="nav"></NavBar>
          </div>
          <div class="cod">
      <div class="row">
        <div class="col-md-6">
          <h1>Cash on Delivery</h1>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <!-- <label for="name">Name</label> -->
              Name<div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fas fa-user"></i>
                  </span>
                </div>
                <input type="text" class="form-control" id="name" v-model="name" required>
              </div>
            </div>
            <div class="form-group">
              <!-- <label for="address">Address</label> -->
              Address
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fas fa-map-marker-alt"></i>
                  </span>
                </div>
                <input type="text" class="form-control" id="address" v-model="address" required>
              </div>
            </div>
            <div class="form-group">
              <!-- <label for="phone">Phone</label> -->
              Phone <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fas fa-phone"></i>
                  </span>
                </div>
                <input type="tel" class="form-control" id="phone" v-model="phone" required>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">Place Order</button>
          </form>
          <p v-if="submitted" class="mt-3 alert alert-success">Your order has been submitted!</p>
        </div>
        <div class="col-md-6">
          <img src="../assets/logo.png"  alt="Cash on Delivery Image" class="img-fluid">
        </div>
      </div>
    </div>
    </div>
     </div>
  </template>
  
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'CashOnDeliveryForm',
    data() {
      return {
        name: '',
        address: '',
        phone: '',
        submitted: false
      }
    },
    methods: {
      submitForm() {
        const order = {
          name: this.name,
          address: this.address,
          phone: this.phone
        };
        axios.post('/api/orders', order)
          .then((success) => {
            this.submitted = true;
            console.log(success);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  }
  </script>
  


  <style>
  .cod {
    margin-top: 50px;
    text-align: center;
    background-color: rgb(234, 227, 213);
    width: 40%;
    height: 40%;
  margin-left: 30%;
  }
 
  h1 {
    margin-bottom: 20px;
  }
  .form-group {
    margin-bottom: 20px;
   
  }
  input[type="text"],
  input[type="tel"] {
    border-radius: 0;
    width: 100%;
    height:100%;
  }
  .input-group-prepend .input-group-text {
    background-color: white;
    border-radius: 0;
   
  }
  .btn-primary {
    background-color: #f0c14b;
    border-color: #a88734;
  }
  .btn-primary:hover {
    background-color: #f7ca88;
  }
  .alert-success {
    background-color: #d4edda;
    color: #155724;
    border-color: #c3e6cb;
  }
  img{
    margin-top: 20px;
    border-radius: 10px;
  }
</style>




<!-- 
<template>
<div>
    <div >
        <NavBar class="nav"></NavBar>
      </div>
      <h2 class="payment-title">Cash on Delivery</h2> -->
    <!-- <img src="../assets/logo.png"  alt=""> -->
    <!-- <div  class="about-content">
        
        <div class="about-image">
            <img src="../assets/logo.png" alt="About Us">
          </div>
    
     
      <form @submit.prevent="submitForm" class="about-text">
       
        Name <input type="text" id="name" v-model="name" required class="form-input">
        
        Address <input type="text" id="address" v-model="address" required class="form-input">
       
        Phone <input type="tel" id="phone" v-model="phone" required class="form-input">
        <button type="submit" class="form-btn">Place Order</button>
      </form>
      <p v-if="submitted" class="success-msg">Your order has been submitted!</p>
    </div> -->

    <!-- <ProductsListItem @buy="display($event)"/> -->
<!-- </div>
  </template> -->
  
  <!-- <script>
//   import ProductsListItem from './ProductsListItem.vue'
  export default {
    name:"CodPayment",
    data() {
      return {
        name: "",
        address: "",
        phone: "",
        submitted: false,
        // id:"",
        // img:"",
        // price:"",
      };
    },
    // components:{
    //     ProductsListItem
    // },
    methods: {
      submitForm() {
        // Handle the submission of the form
        // For example, you could send the form data to a server using an API call
        // Once the submission is successful, you can set the `submitted` data property to true
        this.submitted = true;

        const data = {
    name: this.name,
    address: this.address,
    phone: this.phone,
    // productId: this.id,
    // productImg: this.img,
    // productPrice: this.price,
  };

  fetch('/api/cod', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        this.submitted = true;
        alert("success");
        console.log(response);
      } else {
        alert('Failed to submit payment');
      }
    })
    .catch((error) => {
      alert('Failed to submit payment',error);
    });
      },
    //   display(e){
    //   this.id=e.id;
    //   this.img=e.img;
    //   this.price=e.price;
    // console.log(this.id,this.img,this.price);

      }
    }

  </script> -->
  
  <!-- <style scoped>
  .about-content {
    margin: 2rem auto;
    max-width: 800px;
    padding: 2rem;
    background-color: #fff;
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
  
  .about-image img {
    max-width: 100%;
    height: auto;
  }
  
  .about-text {
    font-size: 1.1rem;
  }
    .payment-form {
      max-width: 400px;
      margin: auto;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 5px;
      text-align: center;
    
    }
  
    .payment-title {
      font-size: 28px;
      text-align: center;
      margin: 20px;
    }
  
    .form {
      text-align: left;
    }
  
    .form-label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
    }
  
    .form-input {
      width: 100%;
      padding: 10px;
      margin-bottom: 15px;
      border: 1px solid #ddd;
      border-radius: 5px;
      font-size: 16px;
    }
  
    .form-btn {
      background-color: #4CAF50;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
    }
  
    .form-btn:hover {
      background-color: #3e8e41;
    }
  
    .success-msg {
      color: green;
      font-weight: bold;
      margin-top: 15px;
    }
  </style> -->
  