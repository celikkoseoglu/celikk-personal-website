import React from "react";
import Experience from "../components/CV/Experience/Experience";
import Skill from "../components/CV/Skill";
import Container from "../components/Util/Container";
import Row from "../components/Util/Row";

const experiences = require("../data/resume/experiences");
const resumeSkills = require("../data/resume/skills");

const CV = () => {
  return (
    <Container>
      <Row>
        <div>
          {resumeSkills.map(skill => (
            <Skill header={skill.header} content={skill.content} />
          ))}
        </div>
        <div>
          {experiences.map(experience => (
            <Experience
              companyName={experience.companyName}
              description={experience.description}
              bulletPoints={experience.bulletPoints}
            />
          ))}
        </div>
      </Row>
    </Container>
  );
};

export default CV;
