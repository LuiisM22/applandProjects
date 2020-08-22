import React, { Component } from "react";
import Projects from "../Services/Projects";
import axios from "axios";
//import Loader from "./Loader";
import UseLoader from "../Services/UseLoader";
export class Grid extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      Data2: [],
      loading:false
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
      <div>
      <div className="fill-window flex content-center flex-wrap bg-gray-400">
        {/* <Loader className=" ml-20 absolute items-center z-10 "  type="Grid" color="#00BFFF" height={200} width={200} />        */}
        <Projects project={this.state.Data2} />
      </div>
        
      </div>
    );
  }
}
