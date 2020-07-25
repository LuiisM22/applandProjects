import React , { Component } from 'react';
//import Details from './Details';
//import { Link } from 'react-router-dom';
//import axios from "axios";
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
 /*  async getData(){
    try {
        let ide =this.id.bind(this)
        console.log(ide);
        let {data}  = await axios.get(
            `http://localhost:5000/applandproyects/us-central1/api/projectById/${ide}`,
            );
            if (data.success ){
                this.setState({
                  Data2: data.data.bind(this)
                })
            }
            else{
                console.log('error ');
            }
    } catch (error) {
        console.log(error);   
    }
} */

 /*  _handleClick(id) {
    route.push(`/ProjectDetails/${id}`);
  } */

  render(){
    const {title, author, category, description, qualification, img}=this.props
    return(
      <form action="{/ProjectDetails}" method="post">
        <div  /* onClick= {(event) =>  {this._handleClick(id,event)}} */ className=" md:flex bg-gray-400  w-1/4 max-w-sm w-full lg:max-w-full lg:flex">
          <div className="h-15 lg:h-auto lg:w-15 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center " style={{'backgroundImage':'gs://applandproyects.appspot.com/src/img/cardl.jpg '}} alt="d" />
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
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
        </div>
      </form>
    );
    }
}