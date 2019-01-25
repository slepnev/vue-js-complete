<template>
  <div class="col-12">
    <app-server-status v-for="server in 5"></app-server-status>
  </div>
</template>

<script>
  import ServerStatus from './ServerStatus.vue';

  export default {
    components: {
      'app-server-status': ServerStatus
    }
  }
</script>

<style lang="scss" scoped>
  div{
    border: 1px solid blue;
  }
</style>
