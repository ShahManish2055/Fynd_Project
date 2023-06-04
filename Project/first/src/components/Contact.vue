<template>
    <div>
        <div >
            <NavBar class="nav"></NavBar>
          </div>
          <div class="email-container">
            <h1>Email Us</h1>
            <div class="email-content">
                <div class="email-address">Email: smanish2055@gmail.com</div>
                <!-- <div class="email-address">Number: +91 9021701320</div> -->
                <div class="email-icon">
                    <i class="fas fa-envelope"></i>
                    <span>Contact us with any questions or inquiries.</span>
                </div>
                <p class="email-message">We will get back to you as soon as possible. Thank you!</p>
                <img src="../assets/logo.png" alt="Email Us" class="email-image">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'ContactPage',
}
</script>

<style>

      
        .email-image {
            display: block;
            margin: 0 auto;
            max-width: 100%;
            margin-top: 20px;
        }
        
        .email-container {
            width: 700px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
            margin-top: 40px;
        }

        h1 {
            font-size: 24px;
            text-align: center;
            margin-top: 0;
        }

        .email-content {
            margin-top: 20px;
        }

        .email-address {
            font-size: 16px;
            text-align: center;
            color: #007bff;
            margin-bottom: 10px;
        }

        .email-icon {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 24px;
            color: #007bff;
            margin-bottom: 20px;
        }

        .email-icon i {
            margin-right: 10px;
        }

        .email-message {
            font-size: 25px;
            text-align: center;
            margin-bottom: 0;
        }
    </style>