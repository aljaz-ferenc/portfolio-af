import "./Projects.scss";
import projects from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";
import { useDocumentTitle } from "../functions/hooks";

export default function Projects() {
  useDocumentTitle("Projects");

  return (
    <div className="projects">
      {projects.map((proj, index) => (
        <div key={proj.id}>
          <ProjectCard index={index} project={proj} />
          {index < projects.length - 1 && <hr />}
        </div>
      ))}
    </div>
  );
}
