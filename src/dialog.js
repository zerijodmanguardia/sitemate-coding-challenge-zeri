import Component from "./component.js";

export default class Dialog extends Component {
  setActiveModal(value) {
    this.component.style.display = value ? "block" : "none";
  }
  ready() {
    //ready for rendering

    //listen for button trigger
    const triggerButton = this.window.document.getElementById(
      this.getParam(this.component, "button")
    );

    //listen for trigger button
    triggerButton.addEventListener("click", () => {
      this.setActiveModal(true);
    });

    const messageAttr = this.getParam(this.component, "message");
    const TEMPLATE = `<span>${messageAttr}</span><button id="${this.elementId}-accept">Ok</button><button id="${this.elementId}-cancel">Cancel</button>`;
    this.component.innerHTML = TEMPLATE;

    // modal for button event listeners
    const ACCEPT = this.window.document.getElementById(
      `${this.elementId}-accept`
    );
    const CANCEL = this.window.document.getElementById(
      `${this.elementId}-cancel`
    );

    ACCEPT.addEventListener("click", () => {
      const event = new CustomEvent(`${this.elementId}AcceptEvent`, {
        detail: {
          value: true,
        },
      });
      this.component.dispatchEvent(event);
      this.setActiveModal(false);
    });

    CANCEL.addEventListener("click", () => {
      const event = new CustomEvent(`${this.elementId}CancelEvent`, {
        detail: {
          value: false,
        },
      });
      this.component.dispatchEvent(event);
      this.setActiveModal(false);
    });

    //add event
  }
}
