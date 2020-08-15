import React, { useState, useEffect } from "react";
//var request = require('request');
//import axios from "axios";
//const qs = require("qs");
import FileUpload  from "./FileUpload"
const ProjectsForm = () => {
  const [state, setState] = useState({
    loading:false
  });
  const handleSubmit = async(e) => {
    e.preventDefault();
    setState({
        loading:true
    });
    //setState({ [e.target.name]: e.target.value });
    //setProject();
    try {
      console.log(state);
      let config = {
        method: 'POST',
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(state),

      };
      let res = await fetch('http://localhost:5000/applandproyects/us-central1/api/projects', config)
      let json = await res.json()
      console.log(json);
    setState({
        loading:false
    });
    
    } catch (error) {
      setState({
        loading:false
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
  
  useEffect(() => {

  });
  const handleChange = (e) => { 
    setState({
        ...state,
        [e.target.name]: e.target.value
    }
    );
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
                   
                  name="title"
                  onChange={handleChange}
                  value={state.projectName}
                  {...state.author="TE3EtuGzbF2F9ZNa64Fv"}
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
                <input
                  className="bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-200"
                  id="inline-full-name"
                  placeholder="Categoría"
                  name="category"
                  onChange={ handleChange}
                  value={ state.category}
                ></input>
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
                  id="inline-full-name"
                  name="date"
                  onChange={ handleChange}
                  placeholder="Fecha"
                  value={ state.date}
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
                <input
                  className="bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-200"
                  id="inline-full-name"
                  placeholder="Tipo"
                  name="type"
                  onChange={ handleChange}
                  value={ state.type}
                ></input>
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
                  className="bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-200"
                  id="inline-full-name"
                  placeholder="Descripción"
                  name="description"
                  onChange={ handleChange}
                  value={ state.description}
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
              className="bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-200"
              placeholder="Nombre"
              name="authorDescription"
              onChange={ handleChange}
              value={ state.authorDescription}
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
              placeholder="Descripcion Completa"
              name="longDescription"
              onChange={handleChange}
              value={ state.longDescription}
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
              placeholder="Palabras Clave"
              name="keyWords"
              onChange={ handleChange}
              value={ state.keyWords}
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
