<template>
  <div class="row">
    <quote v-for="(quote, i)  in quotes" :key="i"
           @click.native="deleteQuote(i)">{{ quote }}</quote>
  </div>
</template>

<script>
  import Quote from './Quote.vue';

  export default {
    name: 'QuoteGrid',
    components: {Quote},
    props: ['quotes'],
    methods: {
      deleteQuote(index) {
        this.$emit('quoteDelete', index);
      }
    }
  }
</script>

<style scoped>

</style>