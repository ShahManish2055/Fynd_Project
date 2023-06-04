<template>
  <div class="container">
  <div >
    <NavBar class="nav"></NavBar>
  </div>
  <div id="page-wrap">
    <h1>Shopping Cart</h1>
    <ProductsList
      :products="cartItems"
      v-on:remove-from-cart="removeFromCart($event)"/>
    <h3 id="total-price">Total: ${{ totalPrice }}</h3>
    <!-- <button id="checkout-button">Proceed to Checkout</button> -->
    <!-- <Payment pay: totalPrice></Payment> -->

    
    <router-link to="/payment" id="cart-link">
      <button id="checkout-button">Proceed to Checkout</button>
    </router-link>
  </div>
  </div>
</template>

<script>
import axios from 'axios';
import ProductsList from '../components/ProductsList.vue';
// import Payment from '../components/Payment.vue';

export default {
    name: 'CartPage',
    components: {
      ProductsList,
      // Payment,
    },
    data() {
      return {
        cartItems: [],
      }
    },
    computed: {
      totalPrice() {
        return this.cartItems.reduce(
          (sum, item) => sum + Number(item.price),
          0,
        );
      }
    },
    methods: {
      async removeFromCart(productId) {
        const result = await axios.delete(`/api/users/12345/cart/${productId}`);
        this.cartItems = result.data;
      }
    },
    async created() {
      const result = await axios.get('/api/users/12345/cart');
      const cartItems = result.data;
      this.cartItems = cartItems;
      // console.log(cartItems);
    },
};

 
</script>


<style scoped>
  h1 {
    border-bottom: 1px solid black;
    margin: 0;
    margin-top: 16px;
    padding: 16px;
  }

  #total-price {
    padding: 16px;
    text-align: right;
  }

  #checkout-button {
    width: 100%;
    background-color: rgb(36, 138, 36);
    margin-bottom: 5%;
  }

  .product-container {
   
    border-bottom: 1px solid #ddd;
    display: flex;
    padding: 16px;
    width: 100%;
  }

  .product-image {
    flex: 1;
    height: 100px;
    max-width: 100px;
  }

  .details-wrap {
    padding: 0 16px;
    flex: 3;
  }

  .remove-button {
    flex: 1;
    margin: auto;
  }

  #page-wrap {
    margin: auto;
    max-width: 750px;
    min-height: 100vh;
  }
  button:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);}
</style>
