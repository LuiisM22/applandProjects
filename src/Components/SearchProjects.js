import React, {Component} from 'react'
export class SerchProyects extends Component{
    render(){
        return(
            <div>
            <input  className="mx-10 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4  appearance-none leading-normal" type="text" placeholder="Buscar"></input>
            <button href="#" className="lg:inline-block mt-1000 text-sm px-4 py-2 leading-none border rounded text-white border-white block hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Logout</button>
          </div>
        )
    }
}