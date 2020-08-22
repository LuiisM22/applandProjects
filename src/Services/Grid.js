import React, { useState, useEffect } from "react";
import Projects from "./Projects";
import axios from "axios";
//import Loader from "./Loader";
//import UseLoader from "../Services/UseLoader";
const Grid =(props) =>{
  const [state, setState] = useState({
    Data2:[],
    loading:false
  });
  useEffect(() => {
    getData();
  }, []);

  const getData = async()=> {
    try {
      //showLoader();
      let { data } = await axios.get(
        "http://localhost:5000/applandproyects/us-central1/api/projects"
      );
      //console.log(data.data);
      if (data.success) {
        setState({
          Data2: data.data,
        });
        //hideLoader();
      } else {
        console.log("error ");
      }
    } catch (error) {
      console.log(error);
    }
  }

  //const [loader, showLoader, hideLoader]= UseLoader();

    return (
      <div>
      <div className="fill-window flex content-center flex-wrap bg-gray-400">
        {/* <Loader className=" ml-20 absolute items-center z-10 "  type="Grid" color="#00BFFF" height={200} width={200} />        */}
        <Projects project={state.Data2} />
      </div>
{/*         {loader}
 */}      </div>
    );
  
};
export default Grid;
