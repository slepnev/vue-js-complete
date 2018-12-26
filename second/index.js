new Vue({
  el: '#app',
  data: {
    title: 'Hello World!',
    title2: 'Hello World!',
    name: 'Alex',
    link: 'https://google.com',
    finishedLink: '<a href="https://google.com">Google</a>',
  },
  methods: {
    changeTitle: function (event) {
      this.title2 = event.target.value;
    },
    seyHello: function () {
      this.title = 'Hello!';
      return this.title;
    }
  }
});