import React from "react";
import classes from "./Footer.module.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="/#" className={classes.footer__logo}>
        FEBORA
      </a>
      <ul className={classes.permalinks}>
        <li>
          <a href="/#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className={classes.footer__socials}>
        <a href="https://facebook.com">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com">
          <FaInstagram />
        </a>
        <a href="https://twitter.com">
          <FaTwitter />
        </a>
      </div>
      <div className={classes.footer__copyright}>
        <small>&copy; FEBORA. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
