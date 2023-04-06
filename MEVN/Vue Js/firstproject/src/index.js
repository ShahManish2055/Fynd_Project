// import Vue from 'vue';
// import VueRouter from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';

import Home from './views/HomeApp.vue';
import About from './views/AboutApp.vue';

// Vue.use(VueRouter);
const router = createRouter({
    history: createWebHistory(),
    routes: [
      // Define your routes here
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/about',
        name: 'about',
        component: About
      }
    ],
  });
  

export default router;
