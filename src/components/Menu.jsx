import "./Menu.scss";
import { NavLink, Link, useLocation } from "react-router-dom";

import { BsPersonVcard } from "react-icons/bs";
import { GiChemicalDrop } from "react-icons/gi";
import { GiRead } from "react-icons/gi";
import { PiStackFill } from "react-icons/pi";

export default function Menu() {
  const location = useLocation();

  return (
    <div
      className={ location.pathname === "/" ? "menu centered" : "menu"}
    >
      <div className="menu__icons">
        <NavLink to="about" className="menu__icons--icon">
          <span>About</span>
          <BsPersonVcard size={35} color="white" />
        </NavLink>
        <NavLink to="projects" className="menu__icons--icon">
          <span>Projects</span>
          <GiChemicalDrop size={35} color="white" />
        </NavLink>
        <NavLink to="stack" className="menu__icons--icon">
          <span>Stack</span>
          <PiStackFill size={35} color="white" />
        </NavLink>
        <Link
          to="https://blog-react-af.netlify.app/"
          target="_blank"
          className="menu__icons--icon"
        >
          <span>Blog</span>
          <GiRead size={35} color="white" />
        </Link>
      </div>
    </div>
  );
}
