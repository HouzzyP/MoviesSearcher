import React from "react";
import "./Footer.css";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer>
      <div className="info">
        <p>Hecho por Houzzy</p>
      </div>
      <div className="links">
        <div className="github">
          <a href="https://github.com/HouzzyP" target="_blank" rel="noreferrer">
            <AiFillGithub />
            Github
          </a>
        </div>
        <div className="linkedin">
          <a
            href="https://www.linkedin.com/in/juan-pablo-brizuela-37499616a/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
            Linkedin
          </a>
        </div>
      </div>
    </footer>
  );
};
