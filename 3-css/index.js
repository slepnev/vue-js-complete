new Vue({
  el: '#app',
  data: {
    attachRed: false
  },
  methods: {

  },
  computed: {
    divClasses: function () {
      return {
        red: this.attachRed,
        blue: !this.attachRed
      };
    }
  }
});