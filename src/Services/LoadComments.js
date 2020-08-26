import React, { useState, useEffect } from "react";
import axios from "axios";
import Comment from "../Components/Comment";

const LoadComments = (props) => {
  const [state, setState] = useState({
    Data: [],
    idProject: props.idProject,
    idComment: "",
    date: "",
    body: "",
    qualification: "",
    user: "",
  });

  useEffect(() => {
    if (state.idProject) {
      const getCommentInf = async (query) => {
        try {
          const {
            data,
          } = await axios.post(
            "https://us-central1-applandproyects.cloudfunctions.net/api/comments",
            { project: state.idProject }
          );
          setState((prevState) => ({
            ...prevState,
            Data: data.data,
          }));
        } catch (error) {
          console.log(error);
        }
      };
      getCommentInf();
    }
  }, []);
  return (
    <div class="flex content-center flex-wrap border-r border-b border-t border-l border-gray-400 lg:border-l lg:border-t lg:border-gray-400 bg-white lg:rounded-t-lg lg:rounded-b-lg p-4 flex flex-col justify-between leading-normal">
      <div class="comments pt-4 pb-4 flex-1 animated fadeIn Low">
        {state.Data.map((comment) => (
          <Comment data={comment} key={comment.id} />
        ))}
      </div>
    </div>
  );
};

export default LoadComments;
