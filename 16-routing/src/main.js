import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { routes } from './router';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  mode: 'history',
  scrollBehavior(to, from, savedPostion) {
    if (savedPostion) {
      return savedPostion;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  }
});

router.beforeEach((to, from, next) => {
  next();
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
