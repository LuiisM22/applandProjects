import React , { Component } from 'react';
import axios from "axios";
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

class ProjectsForm extends Component {
    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
    }
    async getData(){
        try {
            let url ="http://localhost:5000/applandproyects/us-central1/api/project/"
            //url = url+project.id
            let { data } = await axios.get(url
                );
                if (data.success ){
                    console.log(data);
                    this.state={
                        Data2:data.data
                    }
                               //this.state.Data2:data.data

                }
                else{
                    console.log('error ');
                }
        } catch (error) {   
        }
    }

    // Create a reference to the cities collection
/*     let citiesRef = db.collection('cities');

    // Create a query against the collection
    let queryRef = citiesRef.where('state', '==', 'CA'); 
    console.log('{queryRef}');
    */
    render(){
        //const {onChange , form}=this.props
        return (
            <div className="container">
                <form 
                    onSubmit={this.handleSubmit}
                    >
                    {/*                 
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="title" 
                            name="title"
                            onChange={onChange}
                            value={form.title}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="author" 
                            name="author"
                            onChange={onChange}
                            value={form.author}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="category" 
                            name="category"
                            onChange={onChange}
                            value={form.category}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="date" 
                            className="form-control" 
                            placeholder="date" 
                            name="date"
                            onChange={onChange}
                            value={form.date}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="type" 
                            name="type"
                            onChange={onChange}
                            value={form.type}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="description" 
                            name="description"
                            onChange={onChange}
                            value={form.description}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="img" 
                            name="img"
                            onChange={onChange}
                            value={form.img}
                        />
                    </div>
                    <div className="form-row">
                        <div className="col">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="longCategory" 
                                name="longCategory"
                                onChange={onChange}
                                value={form.longCategory}
                            />
                        </div>
                        <div className="col">
                            <input 
                                type="text" 
                                className="form-control"
                                placeholder="keyWords" 
                                name="keyWords"
                                onChange={onChange}
                                value={form.keyWords}
                            />    
                        </div>
                    </div>
                    
                    <button 
                        type="submit" 
                        className="btn btn-primary"
                    >
                        Submit
                    </button>
                */}
                </form>
                <form className="ml-10" >
                    <div className="md:flex w-full max-sm">
                        <div className="w-16 h-16 mt-2 mb-1">
                            <div className="">
                            <img src="https://firebasestorage.googleapis.com/v0/b/applandproyects.appspot.com/o/src%2Fimg%2F350-512.png?alt=media&token=0c5119c5-9b91-452b-8b73-d1dba2cf44e7" className="border-1 border-gray-200 w-60  mr-4"  alt=" "></img>
                            </div>
                        </div>
                        <div className=" md:w-100 " >
                            <div className="md:flex md:items-left mt-2 mb-1">
                                <div className="md:w-3/5">
                                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-1" htmlFor="inline-full-name">
                                        Nombre del Proyecto
                                    </label>
                                </div>
                                <div className="md:w-3/4">
                                    <input className="bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-200"  id="inline-full-name" type="text" placeholder="Nombre"/>
                                </div>
                            </div>
                            <div className="md:flex md:items-center mb-1">
                                <div className="md:w-3/5">
                                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-1" htmlFor="inline-full-name">
                                        Autor
                                    </label>
                                </div>
                                <div className="md:w-3/4">
                                    <input className="bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-200"  id="inline-full-name" type="text"  placeholder="Autor"/>
                                </div>
                            </div>
                            <div className="md:flex md:items-center mb-1">
                                <div className="md:w-3/5">
                                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-1" htmlFor="inline-full-name">
                                        Categoría
                                    </label>
                                </div>
                                <div className="md:w-3/4">
                                    <input className="bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-200"  id="inline-full-name" type="text"  placeholder="Categoría"/>
                                </div>
                            </div>
                            <div className="md:flex md:items-center mb-1">
                                <div className="md:w-3/5">
                                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-1" htmlFor="inline-full-name">
                                        Fecha de  Creación   
                                    </label>
                                </div>
                                <div className="md:w-3/4">
                                    <input className="bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-200"  id="inline-full-name" type="Date" />
                                </div>
                            </div>
                            <div className="md:flex md:items-center mb-1">
                                <div className="md:w-3/5">
                                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-1" htmlFor="inline-full-name">
                                        Tipo
                                    </label>
                                </div>
                                <div className="md:w-3/4">
                                    <input className="bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-200"  id="inline-full-name" type="text"  placeholder="Tipo"/>
                                </div>
                            </div>
                            <div className="md:flex md:items-center mb-1">
                                <div className="md:w-3/5">
                                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-1" htmlFor="inline-full-name">
                                        Descripción
                                    </label>
                                </div>
                                <div className="md:w-3/4">
                                    <input className="bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-200"  id="inline-full-name" type="text"  placeholder="Descripción"/>
                                </div>
                            </div>
{/*                             <div className="md:flex md:items-center mb-1">
                                <div className="md:w-3/5">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-1" for="inline-username">
                                Password
                                </label>
                                </div>
                                <div className="md:w-3/4">
                                <input className="bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-200" id="inline-username" type="password" placeholder="******************"/>
                                </div>
                            </div> */}
                        </div>
        {/*                 <div className="md:flex md:items-center mb-1">
                            <div className="md:w-3/5"></div>
                            <label className="md:w-2/3 block text-gray-500 font-bold">
                            <input className="mr-2 leading-tight" type="checkbox"/>
                            <span className="text-sm">
                            Send me your newsletter!
                            </span>
                            </label>
                        </div> */}

                    </div>
                        <div className=" md:items-center mb-1">
                            <div className="md:w-3/5">
                                <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-1" htmlFor="inline-full-name">
                                    Acerca del Autor
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input className="bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full h-24 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-200"  id="inline-full-name" type="text"  placeholder="Nombre"/>
                            </div>
                        </div>
                    <div className="md:items-left mb-1">
                        <div className="md:w-3/5">
                            <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-1" htmlFor="inline-full-name">
                                Descripción Completa
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-0 border-gray-200 rounded w-full h-48 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-200"  id="inline-full-name" type="text"  placeholder="Nombre"/>
                        </div>
                    </div>
                </form>
                <div className=" pt-5 ml-10 md:items-right">
                    <div className="md:w-2/3">
                    <button className="shadow bg-gray-700 text-teal-200 hover:border-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                        Guardar
                    </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectsForm

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

