<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <div class="row">
      <app-servers></app-servers>
    </div>
    <hr>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Servers from './components/Server/Servers.vue';
  import Header from './components/Shared/Header.vue';
  import Footer from './components/Shared/Footer.vue';

  export default {
    components: {
      'app-servers': Servers,
      'app-header': Header,
      'app-footer': Footer,
    }
  }
</script>

<style lang="scss">
  @import "~bootstrap/scss/bootstrap.scss";
</style>
