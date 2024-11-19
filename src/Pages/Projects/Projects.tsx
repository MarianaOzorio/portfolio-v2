import React from "react";
import styles from "./Projects.module.css";
import projects from "../../local-json/projects.json";

function Projects() {
  return (
    <div className={styles.projectsList}>
      <ul>
        {projects.map((project) => (
          <li key={project.name}>
            <h3>{project.name}</h3>
            <br></br>
            <a href={project.siteUrl} target="_blank">
              site -
            </a>
            <a href={project.codigoUrl} target="_blank">
              código
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
