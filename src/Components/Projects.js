import React  from 'react';
import {Card} from './Card.js';
//import axios from "axios";
const Projects =({ project })=>(
    <div>
        <div className="flex ml-4 mt-4 mr-4 mb-4 animated fadeIn Low">   
        {
            project.map((project)=> (
                    <Card 
                    className="h-auto w-auto ml-2 mr-2"
                    id={project.id}
                    title={project.name}
                    description={project.description}
                    img={project.img}
                    author={project.author}
                    date={project.date}
                    category={project.category}
                    qualification={project.qualification}  
                    />
                
                ))
            }    
        </div>
</div> 
)
export default Projects;