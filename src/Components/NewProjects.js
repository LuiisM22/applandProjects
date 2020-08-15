import React, { useState, useEffect } from "react";
//var request = require('request');
import axios from "axios";
import FileUpload from "./FileUpload";
const ProjectsForm = (props) => {
  let cond = true;
  const [state, setState] = useState({
    DataCategory: [],
    DataType: [],
    loading: false,
    author: { id: null, name: null },
  });
  const [state2, setState2] = useState({
    DataType: [],
  });

  useEffect(() => {
    //console.log(state.DataType);
    //let a=0
    if (cond) {
      const getDataCategory = async (query) => {
        try {
          let { data } = await axios.get(
            "http://localhost:5000/applandproyects/us-central1/api/categories"
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
      //console.log(state2.Data3);
      const getDataType = async (query) => {
        try {
          let { data } = await axios.get(
            "http://localhost:5000/applandproyects/us-central1/api/types"
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
    setState({
      loading: true,
    });
    //setState({ [e.target.name]: e.target.value });
    //setProject();
    try {
      //console.log(state);
      let config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      };
      let res = await fetch(
        "http://localhost:5000/applandproyects/us-central1/api/projects",
        config
      );
      let json = await res.json();
      console.log(json);
      setState({
        loading: false,
      });
    } catch (error) {
      setState({
        loading: false,
      });
      console.log(error);
    }
  };
  /*     var options = {
      'method': 'post',
      'url': 'http://localhost:5000/applandproyects/us-central1/api/projects',
      form: {
        title: state.projectName,
        author:  "tB0Vuf8GwbRARVqv2SrG",
        category: state.category,
        date: state.date,
        type: state.type,
        description: state.description,
        longDescription: state.longDescription,
        keyWords: state.keyWords
      }
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });
     */

  /*     let data = qs.stringify({
      title: state.projectName,
      author:  "tB0Vuf8GwbRARVqv2SrG",
      category: state.category,
      date: state.date,
      type: state.type,
      description: state.description,
      longDescription: state.longDescription,
      keyWords: state.keyWords,
    });
    let config = {
      method: 'post',
      url: 'http://localhost:5000/applandproyects/us-central1/api/projects',
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : data
    };  
    axios(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
      .catch((error) => {
        console.log("setProject",error);
      }); */
  /*       if(state.DataType== undefined) {
          state.DataType.map((project) => (
              <option>categorias</option>
              ))} */

  useEffect(() => {});
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="ml-10">
        <div className="md:flex w-full max-sm">
          <div className="w-16 h-16 mt-2 mb-1">
            <div className="">
              <FileUpload></FileUpload>
              {/* <img
                src="https://firebasestorage.googleapis.com/v0/b/applandproyects.appspot.com/o/src%2Fimg%2F350-512.png?alt=media&token=0c5119c5-9b91-452b-8b73-d1dba2cf44e7"
                className="border-1 border-gray-200 w-60  mr-4"
                alt=" "
              ></img> */}
            </div>
          </div>
          <div className="w-full md:items-left mb-8">
            <div className="md:flex md:items-left mt-4 mb-4">
              <div className="md:w-1/6 mr-2">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-1">
                  Nombre del Proyecto
                </label>
              </div>
              <div className="md:w-3/4">
                <input
                  className="bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-200"
                  id="inline-full-name"
                  placeholder="Nombre"
                  required
                  name="title"
                  onChange={handleChange}
                  value={state.projectName}
                  {...(state.author = "TE3EtuGzbF2F9ZNa64Fv")}
                ></input>
              </div>
            </div>
            {/*               <div className="md:flex md:items-left mt-4 mb-4">
                <div className="md:w-1/6 mr-2">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-1">
                    Autor
                  </label>
                </div>
                <div className="md:w-3/4">
                  <input
                    className="bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-200"
                    id="inline-full-name"
                    placeholder="Autor"
                    name="author"
                     
                    onChange={this.handleChange}
                    value={this.state.author}
                  ></input>
                </div>
              </div> */}
            <div className="md:flex md:items-left mt-4 mb-4">
              <div className="md:w-1/6 mr-2">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-1">
                  Categoría
                </label>
              </div>
              <div className="md:w-3/4">
                <div className="inline-block relative w-full">
                    <select
                        name="category"
                        required
                        onChange={handleChange}
                        value={state.category}
                        className="block appearance-none w-full bg-gray-200 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded text-gray-500 shadow leading-tight focus:outline-none focus:shadow-outline"
                    >
                    <option >Seleccione una Categoría</option>
                    {state.DataCategory.map((category) => (
                      <option
                      
                      required
                      >
                        {category.name}
                      </option>
                    ))}
                  </select>
                  {/* <input value={state.category}></input> */}
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
                {/*                 <input
                  className="bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-200"
                  id="inline-full-name"
                  placeholder="Categoría"
                  name="category"
                  onChange={ handleChange}
                  value={ state.category}
                ></input> */}
              </div>
            </div>
            <div className="md:flex md:items-left mt-4 mb-4">
              <div className="md:w-1/6 mr-2">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-1">
                  Fecha de Creación
                </label>
              </div>
              <div className="md:w-3/4">
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
              <div className="md:w-3/4">
                <div className="inline-block relative w-full">
                  <select
                    required
                    name="type"
                    onChange={handleChange}
                    className="block text-gray-500 appearance-none w-full bg-gray-200 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option>Seleccione un Tipo</option>
                    {state2.DataType.map((type) => (
                      <option required>{type.name}</option>
                    ))}
                    {/* value={state.type} */}
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

                {/* <input
                  className="bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-200"
                  id="inline-full-name"
                  placeholder="Tipo"
                  name="type"
                  onChange={handleChange}
                  value={state.type}
                ></input> */}
              </div>
            </div>
            <div className="md:flex md:items-left mt-4 mb-4">
              <div className="md:w-1/6 mr-2">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-1">
                  Descripción
                </label>
              </div>
              <div className="md:w-3/4">
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
          <div className="md:w-2/3 mb-8 bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full h-auto py-1 px-3">
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
          <div className="md:w-2/3 mb-8 bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full h-auto py-1 px-3">
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
          <div className="md:w-2/3 mb-8 bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full h-auto py-1 px-3 ">
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
        <div className=" pt-5 ml-10 md:items-right">
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
