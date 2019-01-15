new Vue({
  el: '#app',
  data: {
    title: 'The VueJS Instance',
    showParagraph: false,
  },
  methods: {
    show: function () {
      this.showParagraph = true;
      this.updateTitle('The VueJS Inctance (Updated)');
    },
    updateTitle: function (title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function () {
      return this.title.toLowerCase();
    }
  },
  matches: {
    title: function (value) {
      alert('Title change, new value: ' + value);
    }
  }
});