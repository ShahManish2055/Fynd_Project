import Vue from 'vue'
import VueRouter from 'vue-router'
import CartPage from '../views/CartPage.vue';
import ProductDetailPage from '../views/ProductDetailPage.vue';
import ProductsPage from '../views/ProductsPage.vue';
import NotFoundPage from '../views/NotFoundPage.vue';
import LoginRegistration from '../components/Login.vue';
import registrationLogin from '../components/Registration.vue'
import AboutPage from '../components/About.vue'
import ContactPage from '../components/Contact.vue'
import paymentMethod from '../components/Payment.vue'
Vue.use(VueRouter)
import landingPage from '../components/Payment_LandingPage.vue'
import CodPayment from '../components/Cod_Payment.vue'
const routes = [
  {
    path: '/',
    name: 'LoginRegistration',
    component:LoginRegistration
 
  },
  {
    
    path: '/register',
    name: 'registrationLogin',
    component:registrationLogin
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductsPage,
  }, {
    path: '/products/:id',
    name: 'ProductDetail',
    component: ProductDetailPage,
  }, {
    path: '/cart',
    name: 'Cart',
    component: CartPage,
  }, 
  {
    path: '/About',
    name: 'AboutPage',
    component: AboutPage,
  },
  {
    path: '/Contact',
    name: 'ContactPage',
    component: ContactPage,
  },
  {
    path: '/payment',
    name:'landingPage',
    component: landingPage
  },
  {
    path: '/upi',
    name: 'paymentMethod',
    component: paymentMethod,
  },

{
  path: '/CodPayment',
name:"CodPayment",
component: CodPayment
},
  {
    path: '*',
    component: NotFoundPage,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
