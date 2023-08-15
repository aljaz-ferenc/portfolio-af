import "./About.scss";
import data from "../data/about.json";
import { motion } from "framer-motion";
import { useDocumentTitle } from "../functions/hooks";

export default function About() {
  useDocumentTitle("About");

  const pVariants = {
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

  const h1Variants = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const h2Variants = {
    initial: {
      opacity: 0,
      x: 100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div className="about">
      <motion.h1
        variants={h1Variants}
        animate="animate"
        initial="initial"
        className="about__title"
      >
        Aljaž Ferenc
      </motion.h1>
      <motion.h2
        variants={h2Variants}
        animate="animate"
        initial="initial"
        className="about__subtitle"
      >
        Web Developer
      </motion.h2>
      <motion.div className="about__paragraphs">
        {data.map((para, i) => (
          <motion.p
            key={i}
            initial={pVariants.initial}
            animate={{ ...pVariants.animate, transition: { delay: i * 0.5 } }}
          >
            {para}
          </motion.p>
        ))}
      </motion.div>
    </div>
  );
}
