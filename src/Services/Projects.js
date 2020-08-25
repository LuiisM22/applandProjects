import React from "react";
import Card from "../Components/Card.js";
import { Link } from "react-router-dom";
const Projects = ({ project }) => {
  return (
    <main className="flex-1 animated fadeIn Low">
      {project.map((project) => (
        <Link
          to={{
            pathname: `/ProjectsDetails/${project.id}`,
            data: project,
          }}
          key={project.id}
        >
          <Card data={project} key={project.id} />
        </Link>
      ))}
    </main>
  );
};
export default Projects;
