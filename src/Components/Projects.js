import React from "react";
import Card from "./Card.js";
import { Link } from "react-router-dom";
const Projects = ({ project }) => {
  return (
    <main className=" animated fadeIn Low">
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
