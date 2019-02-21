<template xmlns:v-highlight="http://www.w3.org/1999/xhtml" xmlns:v-local-highlight="http://www.w3.org/1999/xhtml">
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Build-in Directives</h1>
        <p v-text="'Some Text'"></p>
        <p v-html="'<strong>Strong Text</strong>'"></p>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md6 col-md-offset-3">
        <h1>Custom Directives</h1>
        <p v-highlight:background.delay="'red'">Color this</p>
        <p v-local-highlight:background.delay.blink="{
          mainColor: 'red', secondColor: 'blue', delay: 3000
        }">
          Color this too</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    directives: {
      'local-highlight': {
        bind(el, binding, vnode) {
          var delay = 0;
          if (binding.modifiers['delay']) {
            delay = binding.value.delay;
          }
          if (binding.modifiers['blink']) {
            let mainColor = binding.value.mainColor;
            let secondColor = binding.value.secondColor;
            let currentColor = mainColor;
            setTimeout(() => {
              setInterval(() => {
                currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
                if (binding.arg == 'background') {
                  el.style.backgroundColor = currentColor;
                } else {
                  el.style.color = currentColor;
                }
              }, 1000);
            }, delay);
          } else {
            setTimeout(() => {
              if (binding.arg == 'background') {
                el.style.backgroundColor = binding.value;
              } else {
                el.style.color = binding.value;
              }
            }, delay);
          }
        }
      }
    }
  }
</script>

<style>

</style>
