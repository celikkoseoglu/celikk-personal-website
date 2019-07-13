import React from "react";
import Hero from "../components/Hero";
import TitleAndText from "../components/TitleAndText";
import ImageExperience from "../components/ImageExperience";
import ProjectCard from "../components/ProjectCard";
import "bootstrap/dist/css/bootstrap.css";

const content = require("../data/content");
const hero = require("../data/hero");
const personalSkills = require("../data/personalSkills");
const projects = require("../data/projects");

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

      {personalSkills.map(personalSkill => (
        <ImageExperience
          imageLink={personalSkill.imageLink}
          imageAlt={personalSkill.imageAlt}
          title={personalSkill.title}
          subtitle={personalSkill.subtitle}
          text={personalSkill.text}
        />
      ))}

      <div className="row">
        {projects.map(project => (
          <ProjectCard
            imageLink={project.imageLink}
            imageAlt={project.imageAlt}
            title={project.title}
            text={project.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
