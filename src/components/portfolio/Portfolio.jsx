import React from "react";
import classes from "./Portfolio.module.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const portfolioList = [
  {
    id: 1,
    image: IMG1,
    title: "Shopee Seller Products Data Scraper",
    github: "https://github.com",
    demo: "https://dribbble.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "Amazon Product Sale Notifier",
    github: "https://github.com",
    demo: "https://dribbble.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "Automate Spotify Playlist",
    github: "https://github.com",
    demo: "https://dribbble.com",
  },
  {
    id: 4,
    image: IMG4,
    title: "E-Commerce Website",
    github: "https://github.com",
    demo: "https://dribbble.com",
  },
  {
    id: 5,
    image: IMG5,
    title: "Snake Game",
    github: "https://github.com",
    demo: "https://dribbble.com",
  },
  {
    id: 6,
    image: IMG6,
    title: "Ping Pong Game",
    github: "https://github.com",
    demo: "https://dribbble.com",
  },
];
function updatePortfolio(list) {
  return list.map((work) => (
    <article key={work.id} className={classes.portfolio__item}>
      <div className={classes.portfolio__item_image}>
        <img src={work.image} alt="" />
      </div>
      <h3>{work.title}</h3>
      <div className={classes.portfolio__item_cta}>
        <a href={work.github} className="btn" target="_blank" rel="noreferrer">
          Github
        </a>
        <a
          href={work.demo}
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          Demo
        </a>
      </div>
    </article>
  ));
}

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className={`container ${classes.portfolio__container}`}>
        {updatePortfolio(portfolioList)}
      </div>
    </section>
  );
};

export default Portfolio;
