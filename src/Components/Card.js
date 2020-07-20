import React , { Component } from 'react';
import { useHistory } from "react-router-dom";


export class Card extends Component {
  
  _handleClick=(id,event) =>{
    //const route = useHistory();

    //route.push(`/ProjectDetails/${id}`);
    console.log(id)
  }
 /*  _handleClick(id) {
    //route.push(`/ProjectDetails/${id}`);
  } */

state={
      img:'https://firebasestorage.googleapis.com/v0/b/applandproyects.appspot.com/o/src%2Fimg%2Fjonathan.jpg?alt=media&token=893eea25-2446-44dd-9df2-ff894e57a8fb'
    }
    constructor (props){
      //const {title, author, category, description, qualification, img,date, i }=props
    super(props)
    this.state={
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
  componentDidMount(){
    this.setState({
        })
    }
  render(){
    const {id, author, category, description, qualification, img}=this.props
    return(
      <div onClick= {(event) =>  {this._handleClick(id,event)}} className=" md:flex bg-gray-400  w-1/4 max-w-sm w-full lg:max-w-full lg:flex">
        <div className="h-15 lg:h-auto lg:w-15 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center " style={{'backgroundImage':'gs://applandproyects.appspot.com/src/img/cardl.jpg '}} alt="d" />
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div >
            <div  className="text-gray-900 font-bold text-xl mb-2">Titulo: {id}</div>
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
      </div>
    );
    }
}