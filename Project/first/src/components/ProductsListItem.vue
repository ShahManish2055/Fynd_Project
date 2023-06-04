<template>
  <div class="container">
    <!-- <div >
      <NavBar class="nav"></NavBar>
    </div> -->
  <div class="product-container">
    <img class="product-image" :src="product.imageUrl" />
    <div class="details-wrap">
      <h3>{{ product.name }}</h3>
      <p>${{ product.price }}</p>


    <router-link to="/payment" id="cart-link">
      <button
      class="buy-button"
     >Buy</button>
    </router-link>

    </div>
    <button
      class="remove-button"
      v-on:click="$emit('remove-from-cart', product.id)"
    >Remove From Cart</button>
  </div>
  </div>
</template>

<script>
export default {
  name: 'ProductsListItem',
  props: ['product'],
data(){
return{
id:"",
img:"",
price:""
};
},
components:{},
//   methods:{
//     buy(id,img,price){
//       this.id=id;
//       this.img=img;
//       this.price=price;
//       this.$emit('buy' ,this.id,this.img,this.price)
// // console.log(id,img,price);
//     }
//   }
}
</script>

<style scoped>
.product-container {
  align-content: 'center';
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
  margin: 40px;
  width:15vw;
  padding: 5px;
  height: 8vh;
  
}
.buy-button{
  background-color:rgb(61, 155, 61);
  width:9vw;
 
}

button {
  background-color:#F0483E;
 
}
button:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);}
</style>