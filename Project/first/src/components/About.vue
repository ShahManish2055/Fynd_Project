<template>
    <div>
        <div >
            <NavBar class="nav"></NavBar>
          </div>
        <header>
            <h1>About Us</h1>
          </header>
          <marquee behavior="scroll" direction="" scrollamount="15">Welcome to Shah Group Pvt Ltd</marquee>
        
          
          <section class="about-content">
            <div class="about-image">
              <img src="../assets/logo.png" alt="About Us">
            </div>
            <div class="about-text">
              <h2>Welcome to Shah Group</h2>
              <p>At SG E-commerce, we are passionate about providing a seamless online shopping experience to our valued customers. As a private e-commerce business, we strive to offer a curated selection of high-quality products, excellent customer service, and a secure shopping environment.</p>
              <p>Our journey started with a vision to create an online platform that offers a wide range of products for our customers, from fashion and beauty to home and lifestyle. We carefully curate our product collection, partnering with trusted suppliers and vendors to ensure that we deliver only the best to our customers.</p>
              <p>As a customer-centric business, we prioritize the satisfaction and convenience of our customers. Our user-friendly website is designed to provide an easy and enjoyable shopping experience, with a simple checkout process and multiple payment options. We also offer fast and reliable shipping, ensuring that our customers receive their orders in a timely manner.</p>
             
            
            </div>
            <ul>
                <li>Founder :  Manish Shah</li>
                <li>Establish : 04-01-2023 ,Kathmandu,Nepal</li>
             
                
              </ul>
          </section>
    </div>
</template>

<script>
export default {
    name:"AboutPage",
}
</script>

<style>
ul li{
    list-style-type: none
}
/* Reset some default styles */
body,
img {
  margin: 0;
  padding: 0;
}

/* Overall styling */
body {
  background-color: #f4f4f4;
  color: #333;
  font-family: Arial, sans-serif;
}

header {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 2rem;
}

h1 {
  margin: 0;
}

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


</style>