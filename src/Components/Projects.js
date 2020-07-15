import React   from 'react';
import {Card} from './Card.js'
const Projects =({projects})=>(
    <div className="flex mb-4 animated fadeIn Low">   
        {
            projects.map((project)=> (
                <Card 
                    className="h-auto"
                    key={project.id}
                    title={project.title}
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
)
export default Projects
