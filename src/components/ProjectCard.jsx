import { Link } from "react-router-dom";
import "./ProjectCard.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const titleVariants = {
  initial: {
    opacity: 0,
    x: 50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

const imageVariants = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

export default function ProjectCard({ project }) {
  const imgRef = useRef();
  const titleRef = useRef();
  const imgInView = useInView(imgRef, { once: true });
  const titleInVeiew = useInView(titleRef, { once: true });

  return (
    <div className="project-card">
      <motion.div
        ref={imgRef}
        variants={imageVariants}
        animate={imgInView ? "animate" : "initial"}
        initial="initial"
        className="left"
      >
        <img
          className="project-card__image"
          src={`projects-images/${project.image}.webp`}
          alt=""
        />
      </motion.div>
      <div className="right">
        <motion.h3
          ref={titleRef}
          variants={titleVariants}
          initial="initial"
          animate={titleInVeiew ? "animate" : "initial"}
          className="project-card__title"
        >
          {project.title}
        </motion.h3>
        <h4 className="subtitle">{project.subtitle}</h4>
        <div>
          {project.paragraphs.map((para, i) => (
            <Paragraph key={i} text={para} />
          ))}
        </div>
        <div className="project-card__links">
          <Link to={project.urls.github} target="_blank">
            <img src={`icons/github.svg`} alt="" />
          </Link>
          <Link to={project.urls.netlify} target="_blank">
            <img src={`icons/netlify.svg`} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function Paragraph({ text }) {
  const textRef = useRef();
  const textInView = useInView(textRef, { once: true });

  return (
    <motion.p
      className="paragraph"
      variants={variants}
      animate={textInView ? "animate" : "initial"}
      initial="initial"
      ref={textRef}
      style={{color: text.startsWith('NOTE') ? '#ff4e4e' : ''}}
    >
      {text}
    </motion.p>
  );
}
