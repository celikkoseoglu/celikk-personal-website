import React from "react";
import Hero from "../components/Hero";
import TitleAndText from "../components/TitleAndText";
import "bootstrap/dist/css/bootstrap.css";

const content = require("../data/content");
const hero = require("../data/hero");

const Home = () => {
  return (
    <div className="container">
      <Hero
        imageLink={hero.imageLink}
        imageAlt={hero.imageAlt}
        button1Link={hero.button1Link}
        button1Text={hero.button1Text}
        button2Link={hero.button2Link}
        button2Text={hero.button2Text}
        subtitle={hero.subtitle}
        title={hero.title}
      />

      <TitleAndText title={content.heroTitle} text={content.heroText} />
    </div>
  );
};

export default Home;
