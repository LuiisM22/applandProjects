import React  from 'react';
import ProjectsDetails from './ProjectsDetails.js';
//import axios from "axios";
const Details =({ detail })=>(
    <div>
        <div className="flex ml-4 mt-4 mr-4 mb-4 animated fadeIn Low">
            {
                detail.map((detail1)=> (
                    <ProjectsDetails
                        key = {detail1.id}
                        className="h-auto w-auto ml-2 mr-2"
                        id={detail1.id}
                        img={detail1.img}
                        title={detail1.name}
                        author={detail1.author}
                        category={detail1.category}
                        date={detail1.date}
                        type={detail1.type}
                        description={detail1.description}
                        qualification={detail1.qualification}
                        authorDescription={detail1.authorDescription}
                        longDescription={detail1.img}
                        keyWords={detail1.keyWords}                    
                    />
                ))
        }
        </div>
</div>
)
export default Details;