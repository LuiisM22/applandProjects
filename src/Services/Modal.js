import React from "react";
export default class SimpleModal extends React.Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if(!this.props.show){
      return null;
  }
  return (
    <div class="absolute modal z-10" id="modal">
      <div className="content">{this.props.children}</div>
      <div className="actions">
        <button
          className=" shadow bg-gray-700 text-teal-200 hover:border-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          onClick={e => {
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
