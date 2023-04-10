import React from "react";
import classes from "./Portfolio.module.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";

const portfolioList = [
  {
    id: 1,
    image: IMG1,
    title: "Shopee Data Scraper",
    github: "https://github.com/freddoflamingo/shopee-seller-item-scraper.git",
    demo: "https://dribbble.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "Amazon Product Sale Notifier",
    github: "https://github.com/freddoflamingo/amazon-item-tracker.git",
    demo: "https://dribbble.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "Automate Spotify Playlist",
    github:
      "https://github.com/freddoflamingo/auto-create-spotify-playlist.git",
    demo: "https://dribbble.com",
  },
  {
    id: 4,
    image: IMG4,
    title: "Speedtest Twitter Bot",
    github:
      "https://github.com/freddoflamingo/monitor-internet-twitter-bot.git",
    demo: "https://dribbble.com",
  },
  {
    id: 5,
    image: IMG5,
    title: "Snake Game",
    github: "https://github.com/freddoflamingo/snake-game.git",
    demo: "https://dribbble.com",
  },
  {
    id: 6,
    image: IMG6,
    title: "Ping Pong Game",
    github: "https://github.com/freddoflamingo/ping-pong-game.git",
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
