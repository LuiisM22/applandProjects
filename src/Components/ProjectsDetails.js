import React, { useState, useEffect } from "react";
import axios from "axios";
//import { useParams } from "react-router-dom";

/* 
const NewProjects =(props)=>(
    <div className="flex mb-4 animated fadeIn Low">
        {
            <h1>Crear un Nuevo Proyecto</h1>
        }
    </div>
)
export default NewProjects
import React from 'react' */

const ProjectsDetails = (props) => {
  const [state, setState] = useState({
    id: props.location.data.id,
    img: props.location.data.img,
    title: props.location.data.title,
    author: {id: props.location.data.author , name: "" },
    category: { id: props.location.data.category, name: "" },
    date: props.location.data.date,
    type: {id: props.location.data.type, name: "" },
    description: props.location.data.description,
    qualification: props.location.data.qualification,
    authorDescription: props.location.data.authorDescription,
    longDescription: props.location.data.longDescription,
    keyWords: props.location.data.keyWords,
  });

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
  }, [ state.category, state.author, state.type]);
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
  //console.log(state);
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
                  {/* Este es el Nombre del proyecto asd fasdf ads asdf adf asdfadfaadsf asadfa asd fasdf ads asdf adf asdfadfaadsf asadfa  */}
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
                  {/* Este es el Autor del proyecto */}
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
                  {/* Esta es la Categoria del proyecto */}
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
                  {/* Esta es la Fecha del proyecto */}
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
                  {/* Este es el Tipo del proyecto */}
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
                  {/* Esta es la Descripción del proyecto */}
                </label>
              </div>
            </div>
            {/*                             <div className="md:flex md:items-left mt-4 mb-4">
                                <div className="md:w-1/6 mr-2">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-1" htmlFor="inline-username">
                                Password
                                </label>
                                </div>
                                <div className="md:w-3/4">
                                <input className="bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-200" id="inline-username" type="password" placeholder="******************"/>
                                </div>
                            </div> */}
          </div>
          {/*                 <div className="md:flex md:items-left mt-4 mb-4">
                            <div className="md:w-1/6 mr-2"></div>
                            <label className="md:w-2/3 block text-gray-500 font-bold">
                            <input className=mr-2 leading-tight" type="checkbox"/>
                            <span className="text-sm">
                            Send me your newsletter!
                            </span>
                            </label>
                        </div> */}
        </div>
        <div className=" md:items-left mt-4 mb-4">
          <div className="md:w-2/3">
            <label className="bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full h-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-200">
              {qualification}
              {/* del 1 al 5 */}
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
              {/* Esta es la Descripcion del Autor
                                Esta es la Descripcion del Autor
                                Esta es la Descripcion del Autor
                                Esta es la Descripcion del Autor
                                Esta es la Descripcion del Autor
                                Esta es la Descripcion del Autor */}
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
              {/* Esta es la Descripcion Completa del Proyecto Esta es la Descripcion Completa del Proyecto Esta es la Descripcion Completa del Proyecto Esta es la Descripcion Completa del Proyecto Esta es la Descripcion Completa del Proyecto
                                Esta es la Descripcion Completa del Proyecto Esta es la Descripcion Completa del Proyecto Esta es la Descripcion Completa del Proyecto Esta es la Descripcion Completa del Proyecto Esta es la Descripcion Completa del Proyecto 
                                Esta es la Descripcion Completa del Proyecto Esta es la Descripcion Completa del Proyecto Esta es la Descripcion Completa del Proyecto Esta es la Descripcion Completa del Proyecto Esta es la Descripcion Completa del Proyecto 
                                Esta es la Descripcion Completa del Proyecto Esta es la Descripcion Completa del Proyecto Esta es la Descripcion Completa del Proyecto Esta es la Descripcion Completa del Proyecto Esta es la Descripcion Completa del Proyecto 
                                Esta es la Descripcion Completa del Proyecto Esta es la Descripcion Completa del Proyecto Esta es la Descripcion Completa del Proyecto Esta es la Descripcion Completa del Proyecto Esta es la Descripcion Completa del Proyecto 
                                Esta es la Descripcion Completa del Proyecto Esta es la Descripcion Completa del Proyecto Esta es la Descripcion Completa del Proyecto Esta es la Descripcion Completa del Proyecto Esta es la Descripcion Completa del Proyecto  */}
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
              {/* Estas son las Palabras Claves del Proyecto */}
            </label>
          </div>
        </div>
      </form>
      <div className=" pt-5 ml-10 md:items-right">
        <div className="md:w-2/3">
{/*           <button
            className="shadow bg-gray-700 text-teal-200 hover:border-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Guardar
          </button> */}
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
