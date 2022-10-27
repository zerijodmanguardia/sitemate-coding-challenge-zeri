/**
 * This file is for the consumer which will listen for button events addressing:
 *
 * As a component, the confirmation dialog should be able to accept a message as a parameter
 * from the consumer to display in the modal. It also should return the result (e.g. confirmed or not)
 * to the consumer after the user clicks the buttons.
 * */

window.document
  .getElementById("dialogOne")
  .addEventListener("dialogOneAcceptEvent", ({ detail }) => {
    console.log("consumer has listend for accept event", detail);
  });

window.document
  .getElementById("dialogOne")
  .addEventListener("dialogOneCancelEvent", ({ detail }) => {
    console.log("consumer has listend for accept event", detail);
  });
