import React from "react";
import Experience from "../components/CV/Experience/Experience";
import Skill from "../components/CV/Skill";
import Container from "../components/Util/Container";
import Row from "../components/Util/Row";
import MetaDecorator from "../components/Util/MetaDecorator";
import metaThumbnail from "../data/images/meta/cv.png";

const experiences = require("../data/resume/experiences");
const resumeSkills = require("../data/resume/skills");
const interactiveResume = require("../data/resume/interactiveResume");

const CV = () => {
  return (
    <Container>
      <MetaDecorator
        description={interactiveResume.pageDescription}
        title={interactiveResume.pageTitle}
        imageUrl={metaThumbnail}
        imageAlt={interactiveResume.metaImageAlt}
      />
      <Row>
        <div>
          {resumeSkills.map((skill) => (
            <Skill header={skill.header} content={skill.content} />
          ))}
        </div>
        <div>
          {experiences.map((experience) => (
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
