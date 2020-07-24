import React  from 'react';
import {Card} from './Card.js';
import {Link } from 'react-router-dom';
//import axios from "axios";
const Projects =({ project })=>(
    <div>
        <div className="flex ml-4 mt-4 mr-4 mb-4 animated fadeIn Low">   
        {
            project.map((project)=> (
                <Link 
                    to = {{
                        pathname:`/ProjectsDetails`,
                        data:project
                    }}
                    key ={project.id}>
                    <Card 
                        key ={project.id}
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
                </Link>
                
/*                 <Link to = {`/Details/${project.id}`}
                    key = {project.id}
                    detail= {project.id}
                >
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
                </Link>
                
                */
               ))

            }    
        </div>
</div> 
)
export default Projects;