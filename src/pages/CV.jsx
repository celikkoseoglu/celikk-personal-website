import React from "react";
import Experience from "../components/Experience/Experience";
import Skill from "../components/Skill";
import "../index.sass";

const experiences = require("../data/resume/experiences");
const resumeSkills = require("../data/resume/skills");

const CV = () => {
  return (
    <div className="container">
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
    </div>
  );
};

export default CV;
