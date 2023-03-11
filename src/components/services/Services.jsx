import React from "react";
import { BiCheck } from "react-icons/bi";

import classes from "./Services.module.css";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className={`container ${classes.services__container}`}>
        <article className={`${classes.service} ${classes.service1}`}>
          <div className={classes.service__head}>
            <h3>DATA ANALYSIS</h3>
          </div>
          <ul className={classes.service__list}>
            <li>
              <BiCheck className={classes.service__list_icon} />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BiCheck className={classes.service__list_icon} />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BiCheck className={classes.service__list_icon} />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF DATA ANALYSIS */}
        <article className={classes.service}>
          <div className={classes.service__head}>
            <h3>WEB DEVELOPMENT</h3>
          </div>
          <ul className={classes.service__list}>
            <li>
              <BiCheck className={classes.service__list_icon} />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BiCheck className={classes.service__list_icon} />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BiCheck className={classes.service__list_icon} />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className={classes.service}>
          <div className={classes.service__head}>
            <h3>SOFTWARE DEVELOPMENT</h3>
          </div>
          <ul className={classes.service__list}>
            <li>
              <BiCheck className={classes.service__list_icon} />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BiCheck className={classes.service__list_icon} />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BiCheck className={classes.service__list_icon} />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF SOFTWARE DEVELOPMENT */}
      </div>
    </section>
  );
};

export default Services;
