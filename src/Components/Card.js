import React, { useState, useEffect } from "react";
import axios from "axios";
import UseLoader from "../Services/UseLoader";
const Card = (props) => {
  const [state, setState] = useState({
    id: props.data.id,
    img: props.data.img,
    title: props.data.title,
    author: { id: props.data.author, name: "" },
    category: { id: props.data.category, name: "" },
    date: props.data.date,
    type: props.data.type,
    description: props.data.description,
    qualification: props.data.qualification,
    authorDescription: props.data.authorDescription,
    longDescription: props.data.longDescription,
    keyWords: props.data.keyWords,
  });

  useEffect(() => {

    if (!state.category.name && !state.author.name) {
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
        showLoader();
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
        hideLoader();
      } catch (error) {
        console.log(error);
      }
    };

    getDataAuthor();
    getDataCategory();
  }
  });


  const { img, title, author, category, description, qualification } = state;
  const [loader, showLoader, hideLoader]= UseLoader();
  
  return (
    <form action="{/ProjectDetails}" method="post">
      <div className="border-r border-b border-t border-l border-gray-400 lg:border-l lg:border-t lg:border-gray-400 bg-white lg:rounded-t-lg lg:rounded-b-lg p-4 flex flex-col justify-between leading-normal">
        <div>
          <div className="text-gray-900 font-bold text-xl mb-2">
            Titulo: {title}
          </div>
          <img className="h-10 lg:h-auto lg:w-10 flex-none" src={img} alt="" />
          <p className="text-gray-700 text-base leading-none">
            Autor: {author.name}
          </p>
          <p className="text-gray-700 text-base leading-none">
            Categoria: {category.name}
          </p>
        </div>
        <div className="items-center">
          <p className="text-gray-700 text-base leading-none">
            Descripcion: {description}
          </p>
        <div className="items-center flex">
          <p className="text-gray-600 text-base leading-none">
            Calificacion:           
              </p>
            <p className="flex" >
          { 
          Array( Number(qualification) ).fill(
            <svg className="h-6 w-6 fill-current text-teal-200">
              <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z" />
            </svg>
           ) } 
          { Array( (5-Number(qualification)) ).fill(
            <svg className="h-6 w-6 fill-current text-gray-500">
              <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z" />
            </svg>
           ) } 
          </p>
          </div>
        </div>
      {loader}
      </div>
    </form>
  );
};
export default Card;
