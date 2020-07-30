import React, { Component } from "react";
class ProjectsForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };


  render() {
    //const {onChange , form}=this.props
    return (
      <div className="container">
        
        <form className="ml-10">
          <div className="md:flex w-full max-sm">
            <div className="w-16 h-16 mt-2 mb-1">
              <div className="">
              <img 
              src="https://firebasestorage.googleapis.com/v0/b/applandproyects.appspot.com/o/src%2Fimg%2F350-512.png?alt=media&token=0c5119c5-9b91-452b-8b73-d1dba2cf44e7" 
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
                  <input
                    className="bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-200"
                    id="inline-full-name"
                    placeholder="Nombre"
                  ></input>
                </div>
              </div>
              <div className="md:flex md:items-left mt-4 mb-4">
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
                  ></input>
                </div>
              </div>
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
              ></input>
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
  }
}

export default ProjectsForm;
