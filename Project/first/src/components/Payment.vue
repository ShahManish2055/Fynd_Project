<!-- <template>
  <div>
    <input v-model="amount" type="number" placeholder="Enter amount">
    <button @click="pay">Pay</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name:'paymentMethod',
  data() {
    return {
      amount: 0
    };
  },
  methods: {
    async pay() {
      try {
        // Call the payment API endpoint to initiate the payment
        const paymentResponse = await axios.post('http://localhost:8080/payment', { amount: this.amount });

        // Redirect to the payment gateway URL
        window.location.href = paymentResponse.paymentUrl;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>


 -->





<!-- <template>
  <div>
    <div >
      <NavBar class="nav"></NavBar>
    </div>
    <img src="../assets/stripe.png" alt="Payment Image" class="payment-image">
    <form @submit.prevent="handleSubmit" class="payment-form">
      <input type="text" v-model="cardNumber" placeholder="Card Number" class="card-number-input" />
      <input type="text" v-model="cardExpiry" placeholder="MM/YY" class="card-expiry-input" />
     
      <input type="text" v-model="cardCvc" placeholder="CVC" class="card-cvc-input" />
      <input type="text" v-model="amount"  placeholder="Amount" class="amount-input" />
    
      <button type="submit" class="pay-button">Pay</button>
    </form>
  </div>
</template>

 <script>
import { loadStripe } from '@stripe/stripe-js';
export default {
  name:'paymentMethod',
  props: ['product'],
  data() {
  return {
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
    amount: '',
  };
},

  methods: {
    async handleSubmit() {
  try {
    // Load the Stripe.js library
    const stripe = await loadStripe('pk_test_51MyH1dSBu5LnuvxChxwGUQjhuZFEM5bKB887F0P7D4cgREo3EN77w9ldQ4DZE4C0xSYEyWm8OzKghIzIFPdiHHql00rpwVcOXk'); // Replace with your Stripe public key

    // Create a payment method with the card details
    const { paymentMethod } = await stripe.createPaymentMethod('card', {
      card: {
        number: this.cardNumber,
        exp_month: this.cardExpiry.split('/')[0],
        exp_year: this.cardExpiry.split('/')[1],
        cvc: this.cardCvc,
        
      },
    });

     // Send the payment method and amount to your backend for processing -->
      <!-- const response = await fetch('/api/payment/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ paymentMethodId: paymentMethod.id, amount: this.amount }),
    });

    const data = await response.json();

    if (data.success) {
      // Payment successful
      console.log('Payment successful');
    } else {
      // Payment failed
      console.error('Payment failed:', data.error);
    }
  } catch (error) {
    console.error('Error:', error);
    console.log(error)
  }
},

  },
};
</script>   -->

<!-- <style scoped> 


/* Style for the added image */
.payment-image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 25%;
}
.payment-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
}

.card-number-input,
.card-expiry-input,
.card-cvc-input,
.amount-input {
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  border: none;
  background-color: #ffffff;
}

.pay-button {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  background-color: #007bff;
  border: none;
  cursor: pointer;
}
</style>  -->





<!-- <template>
  <div>
    <h1>Add Payment Method</h1>

    <div v-if="!approvalUrl">
      <form @submit.prevent="createPayment">
        <div>
          <span for="amount">Amount:</span>
          <input type="number" id="amount" v-model="amount" required>
        </div>

        <div>
          <span for="currency">Currency:</span>
          <select id="currency" v-model="currency" required>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </div>

        <div>
          <span for="description">Description:</span>
          <input type="text" id="description" v-model="description" required>
        </div>

        <button type="submit">Pay with PayPal</button>
      </form>
    </div>

    <div v-if="approvalUrl">
      <p>Redirecting to PayPal...</p>
      <iframe :src="approvalUrl" width="100%" height="500"></iframe>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name:'paymentMethod',
  data() {
    return {
      amount: '',
      currency: 'USD',
      description: '',
      approvalUrl: ''
    };
  },
  methods: {
    createPayment() {
      const paymentData = {
        amount: this.amount,
        currency: this.currency,
        description: this.description
      };

      axios.post('/api/payment/create', paymentData)
        .then(response => {
          this.approvalUrl = response.data.approvalUrl;
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>

<style>
button{
  background-color: green;
 margin-top: 10px;
}
</style> -->




<template>
  <div>
    <div>
      <NavBar class="nav"></NavBar>
    </div>
    <img src="../assets/stripe.png" alt="Payment Image" class="payment-image">
    <div class="container-payment">
      <!-- <div id="card-element">
        <card-element ref="cardElement" :options="stripeOptions"></card-element>
      </div> -->
       <!-- <card-element></card-element> -->
      <div class="amount">
        <input v-model="amount" type="number" placeholder="Enter amount">
       <!-- <button v-on:click="pay">pay</button> -->
       <!-- <p>{{ pay }}</p> -->
     <!-- <CartPage> <p>{{ CartPage.methods.totalPrice }}</p></CartPage> -->
      </div>
      <button @click="submitPayment">Submit Payment</button>
    </div>
  </div>
</template>

<script>
// import { CardElement } from 'vue-stripe-elements-plus'
// import CartPage from '../views/CartPage.vue';
export default {
  // props:[
  //   'pay'
  // ],
  components: {
    // CardElement
    // CartPage,
  },
  name: 'paymentMethod',
  data() {
    return {
      cardElement: null,
      amount: 0,
      stripeOptions: {
        style: {
          base: {
            fontSize: '16px',
            color: '#32325d',
            fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
            fontSmoothing: 'antialiased',
            '::placeholder': {
              color: 'rgba(0, 0, 0, 0.4)'
            }
          }
        }
      }
    }
  },
  mounted() {
    if (this.$refs.cardElement && this.$refs.cardElement.getElement()) {
      this.cardElement = this.$refs.cardElement.getElement()
    }
  },
  methods: {
    async submitPayment() {
      // Create a PaymentIntent on the server-side
      const paymentIntent = await fetch('/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          amount: this.amount, // $10.00
          currency: 'usd'
        })
      }).then(response => {
        return response.json()
      })

      if (!this.cardElement) {
        this.cardElement = this.$refs.cardElement.getElement()
      }

      // Confirm the payment on the client-side
      if (this.cardElement) {
        const { error, paymentIntent: result } = await this.$stripe.confirmCardPayment(paymentIntent.client_secret, {
          payment_method: {
            card: this.cardElement
          }
        }) 

        if (error) {
          console.error(error.message)
        } else if (result.paymentIntent.status === 'succeeded') {
          // Store the transaction in your MongoDB database
          await fetch('/store-transaction', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              paymentIntentId: result.paymentIntent.id,
              amount: result.paymentIntent.amount,
              currency: result.paymentIntent.currency,
              customerEmail: result.paymentIntent.receipt_email
            })
          })
        }
      }
    }
  }
}
</script>


<style>
p{
  color: black;
}
button{
  background-color: green;
  margin-top:5px;
  
}
.container-payment{
  text-align: center;
 
  margin-left:35%;
  width: 30%;
  padding:6%;
  background-color:rgb(255, 255, 255);
  border-radius: 10px;
}
input[type=number]{
  height:40px;
  border-radius: 5px;
  width:157px ;
}
.payment-image{
width:33%;
text-align: center;
margin-left:33.5%;
}


</style>
