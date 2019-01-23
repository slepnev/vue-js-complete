import Vue from 'vue';
import App from './App.vue';
import ServerStatus from './components/Server/ServerStatus.vue';
import Home from './components/Server/Home.vue';
import Header from './components/Shared/Header.vue';
import Footer from './components/Shared/Footer.vue';

// Vue.component('app-server-status', ServerStatus);
// Vue.component('app-server', Home);
// Vue.component('app-header', Header);
// Vue.component('app-footer', Footer);

new Vue({
  el: '#app',
  render: h => h(App)
})
