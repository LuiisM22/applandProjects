import React  from 'react';
import {Card} from './Card.js';
//import axios from "axios";
const Projects =({projects})=>(
    <div>
        
        <div className="flex ml-4 mt-4 mr-4 mb-4 animated fadeIn Low">   
        {
            //const {title, author2, category,date, description, qualification, img}=this.props
            projects.map((project)=> (
                <Card 
                className="h-auto w-auto ml-2 mr-2"
                key={project.id}
                title={project.nombre}
                description={project.descripcion}
                img={project.img}
                author={project.autor}
                date={project.fecha}
                category={project.categoria}
                qualification={project.calificacion}  
                />
                ))
            }    
        </div>

</div> 
)
/* render(){
    return(
    <div className="flex mb-4 animated fadeIn Low">  
        {
            projects.map((project)=> (
                <Card 
                    className="h-auto"
                    //cards={this.state.data}
                    
                    //key={id}
                    title={title}
                    author={author}
                    category={category}
                    description={description}
                    qualification={qualification}   
                    img={img}
                    date={date}
                />
            ))
        }    
    </div> 
    );}
   */
export default Projects;