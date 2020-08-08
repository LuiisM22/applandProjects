import React from "react";

var buttons = document.querySelectorAll(".toggle-button");
var modal = document.querySelector("#modal");

[].forEach.call(buttons, function (button) {
  button.addEventListener("click", function () {
    modal.classList.toggle("off");
  });
});

export default class SimpleModal extends React.Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if(!this.props.show){
      return null;
  }
  return (
    <div className="modal z-1" id="modal">
      <div className="content">{this.props.children}</div>
      <div className="actions">
        <button
          className="toggle-button"
          onClo={e => {
          this.onClose(e);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
  }
}
