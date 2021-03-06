import React, { useState, useEffect } from "react";
import axios from "axios";
import FileUpload from "./FileUpload";
const firebase = require("firebase/app");

const ProjectsForm = (props) => {
  let cond = true;
  const [state, setState] = useState({
    DataCategory: [],
    author: { id: null, name: null },
    URLi: "",
    userCredendials: { userID: "" },
  });
  const [state2, setState2] = useState({
    DataType: [],
    category: "",
  });

  useEffect(() => {
    try {
      //this.setState({ userCredendials: NavT.state.User });
      //console.log(state.userCredendials);
      /* if (firebase.auth().currentUser.uid) {
        state.userCredendials.userName= firebase.auth().currentUser.displayName
        console.log(firebase.auth().currentUser.uid );
      } */
    } catch (e) {
      console.log("uid:null");
    }
    if (cond) {
      const getDataCategory = async (query) => {
        try {
          let { data } = await axios.get(
            "https://us-central1-applandproyects.cloudfunctions.net/api/categories"
          );
          if (data.success) {
            setState({
              ...state,
              //category: { name: data.data.name, id: data.data.id }
              DataCategory: data.data,
              cond: true,
            });
            //console.log(state)
          } else {
            console.log("error ");
          }
        } catch (error) {
          console.log(error);
        }
      };
      const getDataType = async (query) => {
        try {
          let { data } = await axios.get(
            "https://us-central1-applandproyects.cloudfunctions.net/api/types"
          );
          if (data.success) {
            setState2({
              ...state2,
              DataType: data.data,
            });
          } else {
            console.log("error ");
          }
        } catch (error) {
          console.log(error);
        }
      };
      getDataType();
      getDataCategory();
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      };
      await fetch(
        "https://us-central1-applandproyects.cloudfunctions.net/api/createProject",
        config
      );
      ///let json = await res.json();
      //console.log("createProject",json);
      props.history.push("/");
    } catch (error) {
      //console.log("createProject",error);
    }
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const getURL = (urlvalue) => {
    setState({
      ...state,
      URLi: urlvalue,
    });
  };

  //state.userCredendials.userID=firebase.auth().currentUser.uid
  //console.log(firebase.auth());
  try {
    if (!firebase.auth().currentUser.displayName) { 
    }      
  } catch (error) {
  }

  //console.log(state.userCredendials.uid);
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="ml-10 pb-12 pt-12 mt-8">
        <div className="md:flex w-full   max-sm">
          <div className="w-64 h-64 mt-2 mb-1">
            <div className="">
              <FileUpload getURL={getURL}></FileUpload>
            </div>
          </div>
          <div className="w-full md:items-left">
            <div className="md:flex md:items-left mb-4">
              <div className="md:w-1/6 mr-2">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-1">
                  Nombre del Proyecto
                </label>
              </div>
              <div className="md:w-2/4">
                <input
                  className="bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-200"
                  id="inline-full-name"
                  placeholder="Nombre"
                  required
                  name="title"
                  onChange={handleChange}
                  value={state.projectName}
                  {...(state.author = "TE3EtuGzbF2F9ZNa64Fv")}
                  {...(state.img = state.URLi)}
                  {...(state.qualification = "0")}
                ></input>
              </div>
            </div>
            <div className="md:flex md:items-left mt-4 mb-4">
              <div className="md:w-1/6 mr-2">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-1">
                  Categoría
                </label>
              </div>
              <div className="md:w-2/4">
                <div className="inline-block  w-full">
                  <select
                    name="category"
                    id="category"
                    onChange={handleChange}
                    className="block appearance-none w-full bg-gray-200 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded text-gray-500 shadow leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option>Seleccione una Categoría</option>
                    {state.DataCategory.map((category) => (
                      <option value={category.id} key={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:flex md:items-left mt-4 mb-4">
              <div className="md:w-1/6 mr-2">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pl-8 pr-1">
                  Fecha de Creación
                </label>
              </div>
              <div className="md:w-2/4">
                <input
                  className="bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-200"
                  required
                  id="inline-full-name"
                  name="date"
                  onChange={handleChange}
                  placeholder="Fecha"
                  value={state.date}
                ></input>
              </div>
            </div>
            <div className="md:flex md:items-left mt-4 mb-4">
              <div className="md:w-1/6 mr-2">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-1">
                  Tipo
                </label>
              </div>
              <div className="md:w-2/4">
                <div className="inline-block relative w-full">
                  <select
                    id="type"
                    name="type"
                    onChange={handleChange}
                    className="block text-gray-500 appearance-none w-full bg-gray-200 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option>Seleccione un Tipo</option>
                    {state2.DataType.map((type) => (
                      <option value={type.id} required key={type.id}>
                        {type.name}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:flex md:items-left mt-4 mb-4">
              <div className="md:w-1/6 mr-2">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-1">
                  Descripción
                </label>
              </div>
              <div className="md:w-2/4">
                <input
                  required
                  className="bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-200"
                  id="inline-full-name"
                  placeholder="Descripción"
                  name="description"
                  onChange={handleChange}
                  value={state.description}
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div className=" md:items-left mt-4 mb-4">
          <div className="md:w-1/6 mr-2">
            <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-1">
              Acerca del Autor
            </label>
          </div>
          <div className="md:w-3/4 mb-8 bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full h-auto py-1 px-3">
            <input
              required
              className="bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-200"
              placeholder="Nombre"
              name="authorDescription"
              onChange={handleChange}
              value={state.authorDescription}
            ></input>
          </div>
        </div>
        <div className="md:items-left mb-1">
          <div className="md:w-1/6 mr-2">
            <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-1">
              Descripción Completa
            </label>
          </div>
          <div className="md:w-3/4 mb-8 bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full h-auto py-1 px-3">
            <input
              className="bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-200"
              required
              placeholder="Descripcion Completa"
              name="longDescription"
              onChange={handleChange}
              value={state.longDescription}
            ></input>
          </div>
        </div>
        <div className="md:items-left mb-1">
          <div className="md:w-1/6 mr-2">
            <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-1">
              Palabras Clave
            </label>
          </div>
          <div className="md:w-3/4 mb-8 bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full h-auto py-1 px-3 ">
            <input
              className="bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-200"
              required
              placeholder="Palabras Clave"
              name="keyWords"
              onChange={handleChange}
              value={state.keyWords}
            ></input>
          </div>
        </div>
        <div className=" pb-12 ml-10 md:items-right">
          <div className="md:w-2/3">
            <button
              className="shadow bg-gray-700 text-teal-200 hover:border-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Guardar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProjectsForm;
