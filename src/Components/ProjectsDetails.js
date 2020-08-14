import React, { useState, useEffect } from "react";
import axios from "axios";
//import Loader from 'react-loader-spinner'
const ProjectsDetails = (props) => {
  const getDataInf = async (query) => {
    let projectId = props.match.params.id;
    try {
      if (!state.id) {
        let {
          data,
        } = await axios.post(
          "http://localhost:5000/applandproyects/us-central1/api/projectByID",
          { id: projectId }
        );
        //console.log(data);
        setState((prevState) => ({
          ...prevState,
          id: data.data.id,
          img: data.data.img,
          title: data.data.title,
          author: { id: data.data.author, name: null },
          category: { id: data.data.category, name: null },
          date: data.data.date,
          type: { id: data.data.type, name: null },
          description: data.data.description,
          qualification: data.data.qualification,
          authorDescription: data.data.authorDescription,
          longDescription: data.data.longDescription,
          keyWords: data.data.keyWords,
        }));
      }
    } catch (error) {
      console.log("getDataInf", error);
    }
  };
  //const stateS = { loading: true };
  const [state, setState] = useState({
    id: null,
    img: " ",
    title: " ",
    author: { id: null, name: null },
    category: { id: null, name: null },
    date: " ",
    type: { id: null, name: null },
    description: " ",
    qualification: " ",
    authorDescription: " ",
    longDescription: " ",
    keyWords: " ",
  });
  getDataInf();

  useEffect(() => {
    
    if (!state.author.name && !state.category.name && !state.type.name ) {
    const getDataCategory = async (query) => {
      try {
          //console.log(state.category.id);
          let {
            data,
          } = await axios.post(
            "http://localhost:5000/applandproyects/us-central1/api/category",
            { id: state.category.id }
          );
          setState((prevState) => ({
            ...prevState,
            category: { name: data.data.name, id: data.data.id },
          }));
        
      } catch (error) {
        console.log("getDataCategory", error);
      }
    };
    const getDataAuthor = async (query) => {
      try {
          let {
            data,
          } = await axios.post(
            "http://localhost:5000/applandproyects/us-central1/api/user",
            { id: state.author.id }
          );
          setState((prevState) => ({
            ...prevState,
            author: { name: data.data.name, id: data.data.id },
          }));
        
      } catch (error) {
        console.log("getDataAutor", error);
      }
    };
    const getDataType = async (query) => {
      try {
          let {
            data,
          } = await axios.post(
            "http://localhost:5000/applandproyects/us-central1/api/type",
            { id: state.type.id }
          );
          //console.log("dataType", data);
          setState((prevState) => ({
            ...prevState,
            type: { name: data.data.name, id: data.data.id },
          }));
        
      } catch (error) {
        console.log("getDataType", error);
      }
    };
    getDataAuthor();
    getDataType();
    getDataCategory();
  }
  }, [
    state.id,
    state.img,
    state.title,
    state.author,
    state.category,
    state.date,
    state.type,
    state.description,
    state.qualification,
    state.authorDescription,
    state.longDescription,
    state.keyWords,
    props.match.params.id,
  ]);

  const {
    img,
    title,
    author,
    category,
    date,
    type,
    description,
    qualification,
    authorDescription,
    longDescription,
    keyWords,
  } = state;

  //const {onChange , form}=this.props
  // mostraria 9999
  return (
    <div className="container">
      {/* <Loader type="Grid" color="#00BFFF" height={80} width={80} /> */}
      <form className="ml-10">
        <div className="md:flex w-full max-sm">
          <div className="w-16 h-16 mt-2 mb-1">
            <div className="">
              <img
                src={img}
                className="border-1 border-gray-200 w-60  mr-4"
                alt=" "
              ></img>
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
                <label
                  className="bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-200"
                  id="inline-full-name"
                  placeholder="Nombre"
                >
                  {title}
                </label>
              </div>
            </div>
            <div className="md:flex md:items-left mt-4 mb-4">
              <div className="md:w-1/6 mr-2">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-1">
                  Autor
                </label>
              </div>
              <div className="md:w-3/4">
                <label
                  className="bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-200"
                  id="inline-full-name"
                  placeholder="Autor"
                >
                  {author.name}
                </label>
              </div>
            </div>
            <div className="md:flex md:items-left mt-4 mb-4">
              <div className="md:w-1/6 mr-2">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-1">
                  Categoría
                </label>
              </div>
              <div className="md:w-3/4">
                <label
                  className="bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-200"
                  id="inline-full-name"
                  placeholder="Categoría"
                >
                  {category.name}
                </label>
              </div>
            </div>
            <div className="md:flex md:items-left mt-4 mb-4">
              <div className="md:w-1/6 mr-2">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-1">
                  Fecha de Creación
                </label>
              </div>
              <div className="md:w-3/4">
                <label
                  className="bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-200"
                  id="inline-full-name"
                >
                  {date}
                </label>
              </div>
            </div>
            <div className="md:flex md:items-left mt-4 mb-4">
              <div className="md:w-1/6 mr-2">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-1">
                  Tipo
                </label>
              </div>
              <div className="md:w-3/4">
                <label
                  className="bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-200"
                  id="inline-full-name"
                  placeholder="Tipo"
                >
                  {type.name}
                </label>
              </div>
            </div>
            <div className="md:flex md:items-left mt-4 mb-4">
              <div className="md:w-1/6 mr-2">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-1">
                  Descripción
                </label>
              </div>
              <div className="md:w-3/4">
                <label
                  className="bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-200"
                  id="inline-full-name"
                  placeholder="Descripción"
                >
                  {description}
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className=" md:items-left mt-4 mb-4">
          <div className="md:w-2/3">
            <label className="bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full h-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-200">
              {qualification}
            </label>
          </div>
        </div>
        <div className=" md:items-left mt-4 mb-4">
          <div className="md:w-1/6 mr-2">
            <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-1">
              Acerca del Autor
            </label>
          </div>
          <div className="md:w-2/3 mb-8 bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full h-auto py-1 px-3">
            <label className=" py-1 text-gray-700 ">{authorDescription}</label>
          </div>
        </div>
        <div className="md:items-left mb-1">
          <div className="md:w-1/6 mr-2">
            <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-1">
              Descripción Completa
            </label>
          </div>
          <div className="md:w-2/3 mb-8 bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full h-auto py-1 px-3">
            <label className=" py-1 text-gray-700 ">{longDescription}</label>
          </div>
        </div>
        <div className="md:items-left mb-1">
          <div className="md:w-1/6 mr-2">
            <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-1">
              Palabras Clave
            </label>
          </div>
          <div className="md:w-2/3 mb-8 bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full h-auto py-1 px-3 ">
            <label className=" py-1 text-gray-700 ">{keyWords}</label>
          </div>
        </div>
      </form>
      <div className=" pt-5 ml-10 md:items-right">
        <div className="md:w-2/3">
          <button
            className="shadow bg-gray-700 text-teal-200 hover:border-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProjectsDetails;

/* import React from 'react';
import PropTypes from 'prop-types';
const Reutilizable = ({reu ,reu2})=>{
    return(
        <div>
            <h1>
                {`${reu} `}
            </h1>
                <p>{`${reu2} ++`}</p>
        </div>
    );
}
Reutilizable.propTypes={
    reu:PropTypes.number.isRequired,
    reu2:PropTypes.number.isRequired,
};
export default Reutilizable; */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 

import React, { useState, useEffect } from "react";
import axios from "axios";
const ProjectsDetails = (props) => {
  const [state, setState] = useState({
    id: props.location.data.id,
    img: props.location.data.img,
    title: props.location.data.title,
    author: { id: props.location.data.author, name: "" },
    category: { id: props.location.data.category, name: "" },
    date: props.location.data.date,
    type: { id: props.location.data.type, name: "" },
    description: props.location.data.description,
    qualification: props.location.data.qualification,
    authorDescription: props.location.data.authorDescription,
    longDescription: props.location.data.longDescription,
    keyWords: props.location.data.keyWords,
  });
  console.log(props.location.data);
  useEffect(() => {
    const getDataCategory = async (query) => {
      try {
        if (!state.category.name) {
          let {
            data,
          } = await axios.post(
            "http://localhost:5000/applandproyects/us-central1/api/category",
            { id: state.category.id }
          );
          //console.log("dataCategory", data);
          setState((prevState) => ({
            ...prevState,
            category: { name: data.data.name, id: data.data.id },
          }));
        }
      } catch (error) {
        console.log(error);
      }
    };
    const getDataAuthor = async (query) => {
      try {
        if (!state.author.name) {
          let {
            data,
          } = await axios.post(
            "http://localhost:5000/applandproyects/us-central1/api/user",
            { id: state.author.id }
          );
          //console.log("dataUser", data);
          setState((prevState) => ({
            ...prevState,
            author: { name: data.data.name, id: data.data.id },
          }));
        }
      } catch (error) {
        console.log(error);
      }
    };
    const getDataType = async (query) => {
      try {
        if (!state.type.name) {
          let {
            data,
          } = await axios.post(
            "http://localhost:5000/applandproyects/us-central1/api/type",
            { id: state.type.id }
          );
          //console.log("dataType", data);
          setState((prevState) => ({
            ...prevState,
            type: { name: data.data.name, id: data.data.id },
          }));
        }
      } catch (error) {
        console.log(error);
      }
    };
    getDataAuthor();
    getDataType();
    getDataCategory();
  }, [state.category, state.author, state.type]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const {
    img,
    title,
    author,
    category,
    date,
    type,
    description,
    qualification,
    authorDescription,
    longDescription,
    keyWords,
  } = state;
  return (
    <div className="container">
      <form onSubmit={handleSubmit}></form>
      <form className="ml-10">
        <div className="md:flex w-full max-sm">
          <div className="w-16 h-16 mt-2 mb-1">
            <div className="">
              <img
                src={img}
                className="border-1 border-gray-200 w-60  mr-4"
                alt=" "
              ></img>
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
                <label
                  className="bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-200"
                  id="inline-full-name"
                  placeholder="Nombre"
                >
                  {title}
                </label>
              </div>
            </div>
            <div className="md:flex md:items-left mt-4 mb-4">
              <div className="md:w-1/6 mr-2">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-1">
                  Autor
                </label>
              </div>
              <div className="md:w-3/4">
                <label
                  className="bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-200"
                  id="inline-full-name"
                  placeholder="Autor"
                >
                  {author.name}
                </label>
              </div>
            </div>
            <div className="md:flex md:items-left mt-4 mb-4">
              <div className="md:w-1/6 mr-2">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-1">
                  Categoría
                </label>
              </div>
              <div className="md:w-3/4">
                <label
                  className="bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-200"
                  id="inline-full-name"
                  placeholder="Categoría"
                >
                  {category.name}
                </label>
              </div>
            </div>
            <div className="md:flex md:items-left mt-4 mb-4">
              <div className="md:w-1/6 mr-2">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-1">
                  Fecha de Creación
                </label>
              </div>
              <div className="md:w-3/4">
                <label
                  className="bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-200"
                  id="inline-full-name"
                >
                  {date}
                </label>
              </div>
            </div>
            <div className="md:flex md:items-left mt-4 mb-4">
              <div className="md:w-1/6 mr-2">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-1">
                  Tipo
                </label>
              </div>
              <div className="md:w-3/4">
                <label
                  className="bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-200"
                  id="inline-full-name"
                  placeholder="Tipo"
                >
                  {type.name}
                </label>
              </div>
            </div>
            <div className="md:flex md:items-left mt-4 mb-4">
              <div className="md:w-1/6 mr-2">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-1">
                  Descripción
                </label>
              </div>
              <div className="md:w-3/4">
                <label
                  className="bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-200"
                  id="inline-full-name"
                  placeholder="Descripción"
                >
                  {description}
                </label>
              </div>
            </div>

          </div>
        </div>
        <div className=" md:items-left mt-4 mb-4">
          <div className="md:w-2/3">
            <label className="bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full h-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-200">
              {qualification}
            </label>
          </div>
        </div>
        <div className=" md:items-left mt-4 mb-4">
          <div className="md:w-1/6 mr-2">
            <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-1">
              Acerca del Autor
            </label>
          </div>
          <div className="md:w-2/3 mb-8 bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full h-auto py-1 px-3">
            <label className=" py-1 text-gray-700 ">
              {authorDescription}
            </label>
          </div>
        </div>
        <div className="md:items-left mb-1">
          <div className="md:w-1/6 mr-2">
            <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-1">
              Descripción Completa
            </label>
          </div>
          <div className="md:w-2/3 mb-8 bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full h-auto py-1 px-3">
            <label className=" py-1 text-gray-700 ">
              {longDescription}
            </label>
          </div>
        </div>
        <div className="md:items-left mb-1">
          <div className="md:w-1/6 mr-2">
            <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-1">
              Palabras Clave
            </label>
          </div>
          <div className="md:w-2/3 mb-8 bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full h-auto py-1 px-3 ">
            <label className=" py-1 text-gray-700 ">
              {keyWords}
            </label>
          </div>
        </div>
      </form>
      <div className=" pt-5 ml-10 md:items-right">
        <div className="md:w-2/3">
                     <button
            className="shadow bg-gray-700 text-teal-200 hover:border-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetails;

 */
