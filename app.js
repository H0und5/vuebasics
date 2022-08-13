// console.log('hello');

const app = Vue.createApp({
  // data, functions
  // template: '<h2>This is a test template</h2>'
  data() {
    return {
      title: 'The Final Empire',
      author: 'Brandon Sanderson',
      age: 45,
      showInfo: true,
    }
  },
  methods: {
    decreaseAge() {
      this.age--
    },
    changeTitle(title) {
      this.title = title
    },
    hideInfoHandler() {

      this.showInfo = !this.showInfo

      console.log(!this.showInfo);
    },
    showInfoHandler() {

      this.showInfo = !this.showInfo

      console.log(!this.showInfo);
    },
    mouseOverEventHandler() {
      console.log('mouse over event executed.');
    },
    mouseLeaveEventHandler() {
      console.log('mouse leave event executed.');
    },
    doubleClickEventHandler() {
      console.log('double click event executed.');
    }
  }
});

app.mount('#app');

