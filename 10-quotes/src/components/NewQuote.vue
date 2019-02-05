<template>
  <div class="row">
    <form action="">
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3">
        <label for="area">Quote</label>
        <textarea class="form-control" name="" v-model="quote"
                  id="area" cols="30" rows="3"></textarea>
      </div>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3">
        <button class="btn btn-primary" @click.prevent="createNew">Add Quote</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'NewQuote',
    data: function () {
      return {
        quote: ''
      };
    },
    methods: {
      createNew() {
        this.$emit('quoteAdded', this.quote);
        this.quote = '';
      }
    }
  }
</script>

<style scoped>
</style>