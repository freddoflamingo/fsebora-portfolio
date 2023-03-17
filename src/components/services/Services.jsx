import React from "react";
import { BiCheck } from "react-icons/bi";

import classes from "./Services.module.css";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className={`container ${classes.services__container}`}>
        {/* END OF DATA ANALYSIS */}
        <article className={classes.service}>
          <div className={classes.service__head}>
            <h3>WEB DEVELOPMENT</h3>
          </div>
          <ul className={classes.service__list}>
            <li>
              <BiCheck className={classes.service__list_icon} />
              <p>Transforming design into reality.</p>
            </li>
            <li>
              <BiCheck className={classes.service__list_icon} />
              <p> Creating integrative front-end with modern technologies.</p>
            </li>
            <li>
              <BiCheck className={classes.service__list_icon} />
              <p>
                API Integrations to enable software to connect with other
                platforms.
              </p>
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
              <p>
                Writing effective script according to requirements in python.
              </p>
            </li>
            <li>
              <BiCheck className={classes.service__list_icon} />
              <p>
                Web and data scraping using frameworks such as Selenium or
                BeautifulSoup.
              </p>
            </li>
            <li>
              <BiCheck className={classes.service__list_icon} />
              <p>
                Extracting meaningful Data from Raw data, documents(PDF, Excel
                sheets, CSV, etc.) and websites.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF SOFTWARE DEVELOPMENT */}
      </div>
    </section>
  );
};

export default Services;
