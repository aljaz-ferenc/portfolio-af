import "./Projects.scss";
import projects from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";
import { useDocumentTitle } from "../functions/hooks";
import Lenis from '@studio-freight/lenis'
import { useEffect } from "react";

export default function Projects() {

  useEffect(() => {
    const lenis = new Lenis({duration: 1, easing:(t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))})

    lenis.on('scroll', (e) => {
      console.log(e)
    })
    
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
  }, [])
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
