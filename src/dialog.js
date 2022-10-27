import Component from "./component.js";

export default class Dialog extends Component {
  setActiveModal(value) {
    this.component.style.display = value ? "flex" : "none";
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
    const TEMPLATE = `<div class="modal">
        <div class="modal-message">
            <span>${messageAttr}</span>
        </div>
        <br>
        <div class="modal-actions">
            <button id="${this.elementId}-accept">Ok</button>
            <button id="${this.elementId}-cancel">Cancel</button>
        </div>
    </div>`;
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
          message: this.getParam(this.component, "accept-message"),
        },
      });
      this.component.dispatchEvent(event);
      this.setActiveModal(false);
    });

    CANCEL.addEventListener("click", () => {
      const event = new CustomEvent(`${this.elementId}CancelEvent`, {
        detail: {
          value: false,
          message: this.getParam(this.component, "dismiss-message"),
        },
      });
      this.component.dispatchEvent(event);
      this.setActiveModal(false);
    });
  }
}
