import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Nav from './components/NavBar.vue';
// import CardElement from './components/CardElement.vue'
// Vue.component('card-element', CardElement)

Vue.component('NavBar', Nav);
Vue.config.productionTip = false

import { StripePlugin } from '@vue-stripe/vue-stripe'

Vue.use(StripePlugin, {
  pk: 'pk_test_51MyH1dSBu5LnuvxChxwGUQjhuZFEM5bKB887F0P7D4cgREo3EN77w9ldQ4DZE4C0xSYEyWm8OzKghIzIFPdiHHql00rpwVcOXk'
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
