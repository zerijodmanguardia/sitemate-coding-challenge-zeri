import Component from "./component.js";

export default class Dialog extends Component {
  ready() {
    //ready for rendering
    console.log("HEY DIALOG!");
    const dlgElement = this.window.document.getElementById("dialog-component");
    console.log(dlgElement);

    let message = "Hello world";
    const TEMPLATE = `<span>${message}</span><button>YEY</button>`;
    dlgElement.innerHTML = TEMPLATE;
  }
}
