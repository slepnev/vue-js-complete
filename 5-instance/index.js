var vm1 = new Vue({
  el: '#app',
  data: {
    title: 'The VueJS Instance',
    showParagraph: false,
  },
  methods: {
    show: function () {
      this.showParagraph = true;
      this.updateTitle('The VueJS Inctance (Updated)');
      this.$refs.myButton.innerText = 'Test';
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

vm1.$mount('#app1');

console.log(vm1.$data.title);
vm1.$refs.heading.innerText = 'Something else';

setTimeout(function () {
  vm1.title = 'Change by Timer';
}, 3000);

var vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'The second Instance'
  },
  methods: {
    onChanged: function () {
      vm1.title = 'Changed!';
    }
  }
});

var vm3 = new Vue({
  template: '<h1>Hello!</h1>'
});

vm3.$mount('#app3');
document.getElementById('app3').appendChild(vm3.$el);
