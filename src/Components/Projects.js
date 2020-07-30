import React  from 'react';
import {Card} from './Card.js';
import {Link } from 'react-router-dom';
//import axios from "axios";
const Projects =({ project })=>(
        <main className=" animated fadeIn Low">   
        {
            project.map((project)=> (
                <Link 
                to = {{
                    pathname:`/ProjectsDetails/${project.id}`,
                    data:project
                }}
                key={project.id}
                >
                    <Card 
                    key={project.id}
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    img={project.img}
                    author={project.author}
                    date={project.date}
                    category={project.category}
                    qualification={project.qualification}  
                    />      
                </Link>
            ))

/*                 <Link 
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
                </Link> */
            }    
        </main>
)
export default Projects;