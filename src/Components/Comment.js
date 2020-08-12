import React, { useState, useEffect } from "react";
import axios from "axios";
//import { useHistory } from "react-router-dom";
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

    getDataAuthor();
    getDataCategory();
  }, [state.category, state.author]);

  /*   _handleClick=(id,event) =>{
    const route = useHistory();
    route.push(`/ProjectDetails`);
    console.log(id)
  } */

  /*  _handleClick(id) {
    route.push(`/ProjectDetails/${id}`);
  } */
  const { img, title, author, category, description, qualification } = state;
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
          <p className="text-gray-600 text-base leading-none">
            Calificacion: {qualification}
          </p>
          <div></div>
        </div>
      </div>
    </form>
  );
};
export default Card;
