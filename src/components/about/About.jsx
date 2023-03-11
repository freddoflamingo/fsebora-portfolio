import React from "react";
import classes from "./About.module.css";
import ME from "../../assets/me-about.jpg";
import { BiAward } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5> <h2>About Me</h2>
      <div className={`container ${classes.about__container}`}>
        <div className={classes.about__me}>
          <div className={classes.about__me_image}>
            <img src={ME} alt="About me" />
          </div>
        </div>

        <div className={classes.about__content}>
          <div className={classes.about__cards}>
            <article className={classes.about__card}>
              <BiAward className={classes.about__icon} />
              <h5>Experience</h5>
              <small>
                Execute Experience to design, optimization, and performance.
              </small>
            </article>

            <article className={classes.about__card}>
              <FiUsers className={classes.about__icon} />
              <h5>Client</h5>
              <small>Guaranteed Full Satisfaction</small>
            </article>

            <article className={classes.about__card}>
              <VscFolderLibrary className={classes.about__icon} />
              <h5>Projects</h5>
              <small>Fast and Accurate Services</small>
            </article>
          </div>
          <p>
            I have always been fascinated by the intersection of technology and
            creativity, and I am passionate about using technology to solve
            complex problems and drive innovation.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
