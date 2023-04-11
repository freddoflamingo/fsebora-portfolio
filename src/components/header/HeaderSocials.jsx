import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import classes from "./Header.module.css";

const HeaderSocials = () => {
  return (
    <div className={classes.header__socials}>
      {/* <a href="https://linkedin.com" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a> */}
      <a
        href="https://github.com/freddoflamingo"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.facebook.com/freddoflamingo"
        target="_blank"
        rel="noreferrer"
      >
        <BsFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
