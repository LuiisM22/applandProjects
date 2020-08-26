import React, { useState, useEffect } from "react";
import Projects from "./Projects";
import axios from "axios";
const Grid = (props) => {
  const [state, setState] = useState({
    Data2: [],
    loading: false,
  });
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let { data } = await axios.get(
        "https://us-central1-applandproyects.cloudfunctions.net/api/projects"
      );
      if (data.success) {
        setState({
          Data2: data.data,
        });
      } else {
        console.log("error ");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="fill-window flex content-center flex-wrap bg-gray-400">
        <Projects project={state.Data2} />
      </div>
    </div>
  );
};
export default Grid;
