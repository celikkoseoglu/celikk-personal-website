import React from "react";
import ReactDOM from "react-dom";
import Experience from "./components/Experience/Experience";
import Skill from "./components/Skill";
import Hero from "./components/Hero";
import TitleAndText from "./components/TitleAndText";
import ImageExperience from "./components/ImageExperience";
import "./index.sass";
import "bootstrap/dist/css/bootstrap.css";

const experiences = require("./data/resume/experiences");
const resumeSkills = require("./data/resume/skills");
const content = require("./data/content");
const personalSkills = require("./data/personalSkills");
const hero = require("./data/hero");

ReactDOM.render(
  <div className="container">
    <Hero
      imageLink={hero.imageLink}
      imageAlt={hero.imageAlt}
      buttonLink={hero.buttonLink}
      buttonText={hero.buttonText}
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
      <div className="col-md-4">
        {resumeSkills.map(skill => (
          <Skill header={skill.header} content={skill.content} />
        ))}
      </div>

      <div className="col-md-8">
        {experiences.map(experience => (
          <Experience
            companyName={experience.companyName}
            description={experience.description}
            bulletPoints={experience.bulletPoints}
          />
        ))}
      </div>
    </div>
  </div>,
  document.getElementById("root")
);
