import React, { useRef } from "react";
import classes from "./Contact.module.css";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_61ql2yq",
        "template_g5fpw1t",
        form.current,
        "4EEuelHegwO8NuY-W"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className={`${classes.contact__container}`}>
        <div className={classes.contact__options}>
          <article className={classes.contact__option}>
            <MdOutlineMail className={classes.contact__option_icon} />
            <h4>Email</h4>
            <h5>mfrederickebora@gmail.com</h5>
            <a href="mailto:mfrederickebora@gmail.com">Send A Message</a>
          </article>
          <article className={classes.contact__option}>
            <RiMessengerLine className={classes.contact__option_icon} />
            <h4>Messenger</h4>
            <h5>Frederick Ebora</h5>
            <a
              href="https://m.me/freddoflamingo"
              target="_blank"
              rel="noreferrer"
            >
              Send A Message
            </a>
          </article>
          <article className={classes.contact__option}>
            <BsWhatsapp className={classes.contact__option_icon} />
            <h4>Viber</h4>
            <h5>+639151885910</h5>
            <a
              href="viber://chat?number=639151885910"
              target="_blank"
              rel="noreferrer"
            >
              Send A Message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            id=""
            rows="7"
            placeholder="Your Messsage"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
