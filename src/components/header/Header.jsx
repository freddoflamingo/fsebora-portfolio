import React from "react";
import classes from "./Header.module.css";
import CTA from "./CTA";
import ME from "../../assets/fse-me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className={`container ${classes.header__container}`}>
        <h5>Hello I'm</h5>
        <h1>Fred Ebora</h1>
        <h5 className="text-light">Python & Web Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className={classes.me}>
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className={classes.scroll__down}>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
