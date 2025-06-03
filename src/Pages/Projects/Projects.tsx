import styles from "./Projects.module.css";
import projects from "../../local-json/projects.json";

function Projects() {
  return (
    <div className={styles.projectsWrapper}>
      <ul>
        {projects.map((project) => (
          <li key={project.name}>
            <h3>{project.name}</h3>
            <br></br>
            <div>
              <a href={project.siteUrl} target="_blank" rel="noreferrer">
                site -
              </a>
              <a href={project.codigoUrl} target="_blank" rel="noreferrer">
                código
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
