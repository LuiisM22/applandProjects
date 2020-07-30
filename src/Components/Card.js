import React , { Component } from 'react';
//import Details from './Details';
//import { Link } from 'react-router-dom';
import axios from "axios";
//import { useHistory } from "react-router-dom";

export class Card extends Component {
  
  constructor (props){
    //const {title, author, category, description, qualification, img,date, i }=props
  super(props)
  //this.getData= this.getData.bind(this)
  this.setState={
      data:[
        this.id=props.id,
        this.title=props.title,
        this.description=props.description,
        this.img=props.img,
        this.author=props.author,
        this.date=props.date,
        this.category=props.category,
        this.qualification=props.qualification
      ]
  }
  }
  _handleClick=(id,event) =>{
    //const route = useHistory();
    //route.push(`/ProjectDetails`);
    //console.log(id)
  }
  async getDataCategory() {
    try {
      if (!this.state.category.name) {
      let {
        data,
      } = await axios.post(
        "http://localhost:5000/applandproyects/us-central1/api/category",
        { id: this.state.category.id }
      );
          //console.log("dataCategory", data);
          this.setState((prevState) => ({
          ...prevState,
          category: { name: data.data.name, id: data.data.id },
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };
  async getDataAuthor() {
      try {
        if (!this.state.author.name) {
        let {
          data,
        } = await axios.post(
          "http://localhost:5000/applandproyects/us-central1/api/user",
          { id: this.state.author.id }
        );
            //console.log("dataUser", data);
            this.setState((prevState) => ({
            ...prevState,
            author: { name: data.data.name, id: data.data.id },
          }));
        }
      } catch (error) {
        console.log(error);
      }
    };
  async getDataType(){
  try {
      if (!this.state.type.name) {
      let {
      data,
      } = await axios.post(
      "http://localhost:5000/applandproyects/us-central1/api/type",
      { id: this.state.type.id }
      );
          //console.log("dataType", data);
          this.setState((prevState) => ({
          ...prevState,
          type: { name: data.data.name, id: data.data.id },
      }));
      }
  } catch (error) {
      console.log(error);
  }
  };
    

 /*  _handleClick(id) {
    route.push(`/ProjectDetails/${id}`);
  } */

  render(){
    const {title, author, category, description, qualification, img}=this.props
    return(
      <form action="{/ProjectDetails}" method="post">   
          <div className="border-r border-b border-t border-l border-gray-400 lg:border-l lg:border-t lg:border-gray-400 bg-white lg:rounded-t-lg lg:rounded-b-lg p-4 flex flex-col justify-between leading-normal">
            <div >
              <div  className="text-gray-900 font-bold text-xl mb-2">Titulo: {title}</div>
              <img className="h-10 lg:h-auto lg:w-10 flex-none"  src={img} alt='' />
              <p className="text-gray-700 text-base leading-none">Autor: {author}</p>
              <p className="text-gray-700 text-base leading-none">Categoria: {category}</p>
            </div> 
            <div className="items-center">
              <p className="text-gray-700 text-base leading-none">Descripcion: {description}</p>
              <p className="text-gray-600 text-base leading-none">Calificacion: {qualification}</p>
              <div >
              </div>
            </div>
          </div>
      </form>
    );
    }
}