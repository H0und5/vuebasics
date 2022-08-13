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
    mouseOverEventHandler(e) {
      console.log('mouse over event executed.', '\n', e.type, '\n',  e);
    },
    mouseLeaveEventHandler(e) {
      console.log('mouse leave event executed.', '\n', e.type, '\n', e);
    },
    doubleClickEventHandler(e) {
      console.log('double click event executed.', '\n', e.type, '\n', e);
    }
  }
});

app.mount('#app');

