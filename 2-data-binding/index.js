new Vue({
  el: '#app',
  data: {
    title: 'Hello World!',
    title2: 'Hello World!',
    name: 'Alex',
    name2: 'Max',
    link: 'https://google.com',
    finishedLink: '<a href="https://google.com">Google</a>',
    counter: 0,
    secondCounter: 0,
    x: 0,
    y: 0,
  },
  computed: {
    output: function () {
      return this.counter > 5 ? 'Greate 5' : 'Smaller 5';
    }
  },
  watch: {
    counter: function (value) {
      var vm = this;
      setTimeout(function () {
        vm.counter = 0;
      }, 3000);
    }
  },
  methods: {
    changeTitle: function (event) {
      this.title2 = event.target.value;
    },
    seyHello: function () {
      this.title = 'Hello!';
      return this.title;
    },
    increase: function (step, event) {
      this.counter += step;
    },
    decrease: function () {
      this.counter--;
    },
    updateCoordinates: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    dummy: function (event) {
      event.stopPropagation();
    },
    alertMe: function (event) {
      alert('Alert!');
    },
    result: function() {
      return this.counter > 5 ? 'Greate 5' : 'Smaller 5';
    }
  }
});