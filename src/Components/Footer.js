import React, { Component } from "react";

export class Footer extends Component {
  state = {
  };
  
  componentDidMount = () => {
  };


  render() {
    return (
      <div className="center flex w-full absolute bottom-0 items-center justify-between flex-wrap bg-gray-700">
        <div className="flex right-1/2 items-center  text-white mr-6">
          <div className="lg:right-0 lg:inset-y-0">
            <a href="/" className="font-semibold text-xl tracking-tight">
              Appland Projects
            </a>
          </div>
        </div>
      </div>

    );
  }
}
