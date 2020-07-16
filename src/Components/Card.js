import React , { Component } from 'react';
//import axios from "axios";
export class Card extends Component {
state={
      img:'https://firebasestorage.googleapis.com/v0/b/applandproyects.appspot.com/o/src%2Fimg%2Fjonathan.jpg?alt=media&token=893eea25-2446-44dd-9df2-ff894e57a8fb'
    }
    
    constructor (props){
      //const {title, author, category, description, qualification, img,date, i }=props
    super(props)
    this.state={
        data:[
          this.key=props.i,
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
  
  /* componentDidMount(){
    this.setState({
        })
    } */
  render(){
    const {title, author, category,date, description, qualification, img}=this.props
    return(
      <div className=" md:flex bg-gray-400  w-1/4 max-w-sm w-full lg:max-w-full lg:flex">
        <div className="h-15 lg:h-auto lg:w-15 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center " style={{'backgroundImage':'gs://applandproyects.appspot.com/src/img/cardl.jpg '}} alt="d" />
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div >
            <div className="text-gray-900 font-bold text-xl mb-2">Titulo: {title}</div>
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


/*         <div className="max-w-sm w-full lg:max-w-full lg:flex">
            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" styles="background-image: url('./img/card-left.jpg')" title="Woman holding a mug"></div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <p className="text-sm text-gray-600 flex items-center">
                        <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                        </svg>
                        Members only
                    </p>
                    <div className="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
                    <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                </div>
                <div className="flex items-center">
                    <img className="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink"></img>
                    <div className="text-sm">
                        <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                        <p className="text-gray-600">Aug 18</p>
                    </div>
                </div>
            </div>
        </div> */