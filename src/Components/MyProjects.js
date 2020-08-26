import React, { Component } from "react";
import Projects from "../Services/Projects";
//import {Link} from 'react-router-dom'
import axios from "axios";
export class MyProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.getData = this.getData.bind(this);
  }
  async getData() {
    try {
      let { data } = await axios.post(
        "https://us-central1-applandproyects.cloudfunctions.net/api/types"
      );
      if (data.success) {
        console.log(data);
        this.setState({
          data: data.data,
        });
      } else {
        console.log("error ");
      }
    } catch (error) {}
  }
  componentDidMount() {
    this.getData();
    this.setState({});
  }
  render() {
    return (
      <div class=" bg-gray-400">
        <Projects projects={this.state.data} />
      </div>
    );
  }
}
