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
      x: 0,
      y: 0,
      books: [
        'Grid Systems',
        'Inside Paragraphs: Typographic Fundamentals',
        'New York City Transit Authority Graphics Standards Manual',
        'Logo Modernism',
        'The End of Print: Carson',
        'Fresh Dialogue One: New Voices in Graphic Design',
        'Reasons to Be Cheerful: The Life and Work of Barney Bubbles',
        'The Art of Looking Sideways',
        'Thoughts on Design',
        'Inventory: The Work Of Christine Hill And Volksboutique',
      ],
      tempURL: 'https://www.omnagarkar.com',
    }
  },
  methods: {
    hideInfoHandler() {

      this.showInfo = !this.showInfo

      console.log(!this.showInfo);
    },
    showInfoHandler() {

      this.showInfo = !this.showInfo

      console.log(!this.showInfo);
    },
    mouseOverEventHandler(e, data) {
      console.log('mouse over event executed.', '\n', e.type, '\n',  e);

      if (data) {
        console.log(data);
      }
    },
    mouseLeaveEventHandler(e) {
      console.log('mouse leave event executed.', '\n', e.type, '\n', e);
    },
    doubleClickEventHandler(e) {
      console.log('double click event executed.', '\n', e.type, '\n', e);
    },
    mouseMoveEventHandler(e) {
      console.log('mouse move event executed.', '\n', e)

      this.x = e.offsetX;
      this.y = e.offsetY;

      console.log(this.x, this.y); 
    
    }
  }
});

app.mount('#app');

