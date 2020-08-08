import React, { Component } from "react";
import Projects from "./Projects";
import axios from "axios";
//import Loader from 'react-loader-spinner'
export class Grid extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      Data2: [],
    };
    //this.getData= this.getData.bind(this)
  }
  componentDidMount() {
    this.getData();
  }
  async getData() {
    try {
      let { data } = await axios.get(
        "http://localhost:5000/applandproyects/us-central1/api/projects"
      );
      //console.log(data.data);
      if (data.success) {
        this.setState({
          Data2: data.data,
        });
      } else {
        console.log("error ");
      }
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <div className="h:100% pb-5 pt-5 ml-20 mr-20 bg-gray-400">
        {/* <Loader className=" ml-20 absolute items-center z-10 "  type="Grid" color="#00BFFF" height={200} width={200} />        */}
        <Projects project={this.state.Data2} />
      </div>
    );
  }
}
