import React from "react";
import classes from "./Experience.module.css";
import { Icon } from "@iconify/react";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What I Use</h5>
      <h2>Tools and Languages</h2>
      <div className={`${classes.experience__container}`}>
        {/* END OF FRONTEND */}
        <div className={classes.experience__backend}>
          <h3>Backend Development</h3>
          <div className={classes.experience__content}>
            <article className={classes.experience__details}>
              <div>
                <Icon
                  icon="vscode-icons:file-type-python"
                  className={classes.experience__logo_icon}
                />
                <h4>Python</h4>
              </div>
            </article>
            <article className={classes.experience__details}>
              <div>
                <Icon
                  icon="vscode-icons:file-type-html"
                  className={classes.experience__logo_icon}
                />
                <h4>HTML</h4>
              </div>
            </article>
            <article className={classes.experience__details}>
              <div>
                <Icon
                  icon="vscode-icons:file-type-css"
                  className={classes.experience__logo_icon}
                />
                <h4>CSS</h4>
              </div>
            </article>
            <article className={classes.experience__details}>
              <div>
                <Icon
                  icon="skill-icons:javascript"
                  className={classes.experience__logo_icon}
                />
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className={classes.experience__details}>
              <div>
                <Icon
                  icon="logos:react"
                  className={classes.experience__logo_icon}
                />
                <h4>React</h4>
              </div>
            </article>
            <article className={classes.experience__details}>
              <div>
                <Icon
                  icon="logos:mysql"
                  className={classes.experience__logo_icon}
                />
                <h4>MySQL</h4>
              </div>
            </article>
            <article className={classes.experience__details}>
              <div>
                <Icon
                  icon="skill-icons:bootstrap"
                  className={classes.experience__logo_icon}
                />
                <h4>Bootstrap</h4>
              </div>
            </article>
            <article className={classes.experience__details}>
              <div>
                <Icon
                  icon="bi:github"
                  className={classes.experience__logo_icon}
                />
                <h4>Github</h4>
              </div>
            </article>
            <article className={classes.experience__details}>
              <div>
                <Icon
                  icon="mdi:git"
                  className={classes.experience__logo_icon}
                />
                <h4>Git</h4>
              </div>
            </article>
            <article className={classes.experience__details}>
              <div>
                <Icon
                  icon="vscode-icons:file-type-vscode"
                  className={classes.experience__logo_icon}
                />
                <h4>VSCode</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
