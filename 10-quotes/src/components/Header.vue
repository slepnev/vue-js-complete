<template>
  <div class="row">
    <div class="col-12">
      <h3>Quotes Added</h3>
      <div class="progress">
        <div class="progress">
          <div class="progress-bar" role="progressbar"
               :style="{width: (quoteCount/maxQuotes) * 100 + '%'}"
               aria-valuemax="100"
               aria-valuemin="0"
               aria-valuenow="60">
            {{ quoteCount }} / {{ maxQuotes }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    props: ['quoteCount', 'maxQuotes']
  }
</script>

<style scoped>

</style>