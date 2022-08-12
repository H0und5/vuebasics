// console.log('hello');

const app = Vue.createApp({
  // data, functions
  // template: '<h2>This is a test template</h2>'
  data() {
    return {
      title: 'The Final Empire',
      author: 'Brandon Sanderson',
      age: 45,
    }
  },
  methods: {
    decreaseAge() {
      this.age--
    },
    changeTitle(title) {
      this.title = title
    },
  }
});

app.mount('#app');

