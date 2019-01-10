new Vue({
  el: '#app',
  data: {
    attachRed: false,
    width: 100,
    color: 'gray'
  },
  methods: {

  },
  computed: {
    divClasses: function () {
      return {
        red: this.attachRed,
        blue: !this.attachRed
      };
    },
    myStyle: function () {
      return {
        backgroundColor: this.color,
        width: this.width + 'px'
      };
    }
  }
});