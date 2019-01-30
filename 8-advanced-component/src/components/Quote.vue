<template>
  <div>
    <div class="title">
      <slot name="title"></slot>
      <small><slot name="subtitle"></slot></small>
    </div>
    <hr>
    <slot></slot>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  div {
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px black;
    padding: 30px;
    margin: 30px auto;
  }

  h2 {
    color: red;
  }

  .title {
    font-style: italic;
  }
</style>