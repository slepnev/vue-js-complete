<template>
  <div>
    <app-header></app-header>
    <app-server></app-server>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import ServerStatus from './components/Server/ServerStatus.vue';
  import Home from './components/Server/Home.vue';
  import Header from './components/Shared/Header.vue';
  import Footer from './components/Shared/Footer.vue';

  export default {
    components: {
      'app-server-status': ServerStatus,
      'app-server': Home,
      'app-header': Header,
      'app-footer': Footer,
    }
  }
</script>

<style lang="scss">

</style>
