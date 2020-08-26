import React, { useState, useEffect } from "react";
import axios from "axios";

const Comment = (props) => {
  const [state, setState] = useState({
    idProject: props.data.idProject,
    idComment: props.data.idComment,
    date: props.data.date,
    body: props.data.body,
    qualification: props.data.qualification,
    author: { id: null, name: null },
  });
  useEffect(() => {
    if (!state.author.name) {
      const getDataAuthor = async (query) => {
        try {
          const {
            data,
          } = await axios.post(
            "https://us-central1-applandproyects.cloudfunctions.net/api/user",
            { id: props.data.user }
          );
          setState((prevState) => ({
            ...prevState,
            author: { name: data.data.name, id: data.data.id },
          }));
        } catch (error) {
          console.log("getDataAutor", error);
        }
      };
      getDataAuthor();
    }
  }, [state.author.name, state.author.id, props.data.user]);

  const { date, body, qualification, author } = state;
  return (
    <div class="">
      <form action="{/ProjectDetails}" method="post">
        <div className="border-r border-b border-t border-l border-gray-400 lg:border-l lg:border-t lg:border-gray-400 bg-white lg:rounded-t-lg lg:rounded-b-lg p-4 flex flex-col justify-between leading-normal">
          <div>
            <div className="text-gray-900 font-bold text-xl mb-2">
              Autor: {author.name}
            </div>
            <p className="text-gray-700 text-base leading-none">Date: {date}</p>
            <p className="text-gray-700 text-base leading-none">
              Calificacion: {qualification}
            </p>
          </div>
          <div className="items-center">
            <p className="text-gray-700 text-base leading-none">
              Comentario: {body}
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Comment;
