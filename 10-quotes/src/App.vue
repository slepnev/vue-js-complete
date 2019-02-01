<template>
  <div class="container">
    <progressbar :quoteCount="quotes.length" :maxQuotes="maxQuotes">
    </progressbar>
    <new-quote @quoteAdded="newQuote"></new-quote>
    <quote-grid :quotes="quotes" @quoteDelete="deleteQuote"/>
    <div class="col-sm-12 text-center">
      <div class="alert alert-info">
        Info Click on a Quote to delete it!
      </div>
    </div>
  </div>
</template>

<script>
  import QuoteGrid from './components/QuoteGrid.vue';
  import NewQuote from './components/NewQuote.vue';
  import Header from './components/Header.vue';

  export default {
    components: {
      Progressbar: Header,
      NewQuote,
      QuoteGrid: QuoteGrid
    },
    data: function () {
      return {
        quotes: [
          'Just a Quote to see something'
        ],
        maxQuotes: 10
      };
    },
    methods: {
      newQuote(quote) {
        if(quote) {
          this.quotes.push(quote);
        }
      },
      deleteQuote(index) {
        if(index !== undefined) {
          this.quotes.splice(index, 1);
        }
      }
    }
  }
</script>

<style>
</style>
