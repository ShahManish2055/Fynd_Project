<template>
    <div class="product-item">
        <img v-bind:src="product.imageUrl" />
        <h3 class="product-name">{{ product.name }}</h3>
        <p class="product-price">${{ product.price }}</p>
        <router-link v-bind:to="'/products/' + product.id">
            <button>View Details</button>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'ProductsGridItem',
    props: ['product'],

    mounted() {
    let user = localStorage.getItem("user-info");
    this.Name = JSON.parse(user).Name;
    if (!user) {
      this.$router.push({ name: "LoginRegistration"});
    }
  },
}


</script>

<style scoped>
.product-item {
    align-items: center;
    border-radius: 8px;
    box-shadow: 0px 2px 5px #888;
    background-color:aliceblue;
    display: flex;
    flex-direction: column;
    margin-bottom: 2%;
    padding: 20px;
    position: relative;
    width: 32%;
  }
  img:hover {
    height: 220px;
    width: 220px;
  }

  .product-name {
    margin-bottom: 0;
  }

  img {
    height: 200px;
    width: 200px;
  }

  a {
    width: 100%;
  }

  button {
    width: 100%;
  }
  button {
    background-color:#F0483E;
   
  }
  button:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  }
</style>