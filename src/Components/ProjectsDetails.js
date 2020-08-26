import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import LoadComments from "../Services/LoadComments";
import UseLoader from "../Services/UseLoader";

const ProjectsDetails = (props) => {
  const [state, setState] = useState({
    id: null,
    img: " ",
    title: " ",
    author: { id: null, name: null },
    category: { id: null, name: null },
    date: " ",
    type: { id: null, name: null },
    description: " ",
    qualification: "",
    authorDescription: " ",
    longDescription: " ",
    keyWords: " ",
  });
  const getDataInf = async (query) => {
    const projectId = props.match.params.id;
    try {
      if (!state.id) {
        const {
          data,
        } = await axios.post(
          "http://localhost:5000/applandproyects/us-central1/api/projectByID",
          { id: projectId }
        );
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
        setStateComment({
          ...stateComment,
          project: data.data.id,
        });
        
      }
    } catch (error) {
      console.log("getDataInf", error);
      
    }
  };
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;
  //console.log(today);
  getDataInf();
  const handleChange = (e) => {
    setStateComment({
      ...stateComment,
      [e.target.name]: e.target.value,
    });
  };
  
  const [stateComment, setStateComment] = useState({
    user:"I9fBsMiMeRcVdZWuMz6qdo557WO2",
    qualification:"",
    project: "",
    body:"",
    date:today
  });
  const createComment = async (e)=>{
    e.preventDefault();
    try {
        await axios.post(
          "http://localhost:5000/applandproyects/us-central1/api/createComment",
           stateComment 
        );
        props.history.push(`/`);
    } catch (error) {
      console.log("createComment",error);
    }
  }

  let deleteProject = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/applandproyects/us-central1/api/deleteProject",
        { id: state.id }
      );
    props.history.push('/');
    } catch (error) {
      //console.log("deleteProject", error);
    }
  };


  useEffect(() => {
    if (!state.author.name && !state.category.name && !state.type.name) {
      const getDataCategory = async (query) => {
        try {
          showLoader();
          const {
            data,
          } = await axios.post(
            "http://localhost:5000/applandproyects/us-central1/api/category",
            { id: state.category.id }
          );
          setState((prevState) => ({
            ...prevState,
            category: { name: data.data.name, id: data.data.id },
          }));
          hideLoader();
        } catch (error) {
          //console.log("getDataCategory", error);
        }
      };
      const getDataAuthor = async (query) => {
        try {
          const {
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
          //console.log("getDataAutor", error);
        }
      };
      const getDataType = async (query) => {
        try {
          const {
            data,
          } = await axios.post(
            "http://localhost:5000/applandproyects/us-central1/api/type",
            { id: state.type.id }
          );
          setState((prevState) => ({
            ...prevState,
            type: { name: data.data.name, id: data.data.id },
          }));
        } catch (error) {
          //console.log("getDataType", error);
        }
      };
      getDataAuthor();
      getDataType();
      getDataCategory();
    }
  });

  const {
    id,
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
  const [loader, showLoader, hideLoader] = UseLoader();

  return (
    <div class="container">
      <form className="ml-10  pt-12 mt-8">
        <div className="md:flex w-full max-sm">
          <div className="w-1/6 mt-8 mb-1">
            <div className="">
              <img
                src={img}
                className="border-1 border-gray-200 w-60  mr-4"
                alt=" "
              ></img>
            </div>
          </div>
          <div className="w-full md:items-left ">
            <div className="md:flex md:items-left mt-4 mb-4">
              <div className="md:w-1/6 mr-2">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-1">
                  Nombre del Proyecto
                </label>
              </div>
              <div className="md:w-3/4">
                <label
                  className="bg-gray-200 appearance-none border-0 border-gray-200 rounded flex w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-200"
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
                  className="bg-gray-200 appearance-none border-0 border-gray-200 rounded  flex w-1/2  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-200"
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
                  className="bg-gray-200 appearance-none border-0 border-gray-200 rounded  flex w-1/2  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-200"
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
                  className="bg-gray-200 appearance-none border-0 border-gray-200 rounded  flex w-1/2  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-200"
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
                  className="bg-gray-200 appearance-none border-0 border-gray-200 rounded  flex w-1/2  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-200"
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
                  className="bg-gray-200 appearance-none border-0 border-gray-200 rounded  flex w-1/2  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-200"
                  id="inline-full-name"
                  placeholder="Descripción"
                >
                  {description}
                </label>
              </div>
            </div>
          </div>
          <div className=" pb-12 ml-20 md:items-right">
            <div className="md:w-2/3">
              <button
                onClick={deleteProject}
                className="shadow bg-gray-700 text-teal-200 hover:border-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>

        <div className=" md:items-left mt-4 mb-4">
          <div className="md:w-2/3 flex mr-2">
            <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-1">
              Calificación
            </label>
            <div className=" flex">
              {Array(Number(qualification)).fill(
                <svg className="h-6 w-6 fill-current text-teal-200">
                  <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z" />
                </svg>
              )}
              {Array(5 - Number(qualification)).fill(
                <svg className="h-6 w-6 fill-current text-gray-500">
                  <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z" />
                </svg>
              )}
            </div>
          </div>
        </div>
        <div className=" md:items-left mt-4 mb-4">
          <div className="md:w-1/6 mr-2">
            <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-1">
              Acerca del Autor
            </label>
          </div>
          <div className="mb-8 bg-gray-200 appearance-none border-0 border-gray-200 rounded flex w-2/3 h-auto py-1 px-3">
            <label className=" py-1 text-gray-700 ">{authorDescription}</label>
          </div>
        </div>
        <div className="md:items-left mb-1">
          <div className="md:w-1/6 mr-2">
            <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-1">
              Descripción Completa
            </label>
          </div>
          <div className="mb-8 bg-gray-200 appearance-none border-0 border-gray-200 rounded  flex w-2/3  h-auto py-1 px-3">
            <label className=" py-1 text-gray-700 ">{longDescription}</label>
          </div>
        </div>
        <div className="md:items-left mb-1">
          <div className="md:w-1/6 mr-2">
            <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-1">
              Palabras Clave
            </label>
          </div>
          <div className="mb-8 bg-gray-200 appearance-none border-0 border-gray-200 rounded  flex w-2/3  h-auto py-1 px-3 ">
            <label className=" py-1 text-gray-700 ">{keyWords}</label>
          </div>
        </div>
      </form>
      <div className="md:w-1/6 ml-10 mr-2 ">
        <label className="block text-gray-500 font-bold text-xl md:text-left mb-1 md:mb-0 pr-1">
          Comentarios
        </label>
      </div>
      <div className=" pb-12 ml-10 md:items-right">
        <div className="md:w-2/3">
          <LoadComments idProject={id} key={id} />
        </div>
      </div>

      <form onSubmit={createComment}>
        <div className=" md:items-left ml-10 mt-4 mb-4">
          <div className="md:w-1/6 mr-2">
            <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-1">
              Calificar y Comentar
            </label>
          </div>
          <div className="md:w-1/12 mb-4">
            <input 
            required
            type="range"
            min="0"
            max="5"
            id="inline-full-name"
            name="qualification"
            onChange={handleChange}
            value={stateComment.Qualification}
            className=" bg-gray-200  border-0 border-gray-200 rounded w-full  text-gray-700 pt-2 pb-2 focus:outline-none focus:bg-white focus:border-teal-200"
            >
            </input>
            <div
              className="bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full h-auto  text-gray-700  focus:outline-none focus:bg-white focus:border-teal-200"
            >
            <label className="pl-10%">0</label>
            <label className="pl-2">1</label>
            <label className="pl-2">2</label>
            <label className="pl-2">3</label>
            <label className="pl-2">4</label>
            <label className="pl-2">5</label>
            </div>

          </div>
          <div className="mb-8 bg-gray-200 appearance-none border-0 border-gray-200 rounded  flex w-2/3  h-auto py-1 px-3 ">
            <input
              required
              id="inline-full-name"
              name="body"
              onChange={handleChange}
              className="bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-200"
              value={stateComment.body}
              placeholder="Comentario"
            ></input>
          </div>
        </div>
        <div className=" pb-12 ml-20 md:items-right">
          <div className="md:w-2/3">
            <button
              className="shadow bg-gray-700 text-teal-200 hover:border-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="POST"
            >
              Guardar
            </button>
          </div>
        </div>
      </form>
      {loader}
    </div>
  );
};
export default ProjectsDetails;
