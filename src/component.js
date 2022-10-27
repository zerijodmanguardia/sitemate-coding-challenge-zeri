export default class Component {
  constructor() {
    this.window = window;
    this.window.addEventListener("load", () => {
      console.log("DOM is ready!");
      this.ready();
    });
  }

  getParams(paramName) {
    retrun;
  }

  //this is an abstract method that should be overriden
  ready() {}
}
