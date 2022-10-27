export default class Component {
  constructor(elementId) {
    this.window = window;
    this.elementId = elementId;

    this.window.addEventListener("load", () => {
      this.component = this.window.document.getElementById(this.elementId);
      this.ready();
    });
  }

  getParam(element, paramName) {
    return element.getAttribute(`@${paramName}`);
  }

  //this is an abstract method that should be overriden
  ready() {}
}
