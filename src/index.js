import React from "react";
import ReactDOM from "react-dom";
import Button from "react-bootstrap/Button";
import Experience from "./components/experience";
import Skill from "./components/skill";
import "./index.sass";
import "bootstrap/dist/css/bootstrap.css";
import TitleAndText from "./components/titleAndText";
import ImageExperience from "./components/imageExperience";

const experiences = require("./data/resume/experiences");
const resumeSkills = require("./data/resume/skills");
const content = require("./data/content");
const personalSkills = require("./data/personalSkills");

ReactDOM.render(
  <div className="container">
    <div className="row">
      <div className="col-md-2" />
      <div className="col-md-4">
        <img
          className="col-md-12 rounded-circle"
          src="https://avatars3.githubusercontent.com/u/5185809?s=460&v=4"
          alt="github profile"
        />
      </div>
      <div className="col-md-1" />
      <div className="col-md-5">
        <h4>Celik Koseoglu</h4>
        <h5>Full Stack Developer</h5>
        <Button href="#" variant="outline-dark" size="lg">
          CV
        </Button>
      </div>
    </div>

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
