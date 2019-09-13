import React from "react";
import Hero from "../components/Hero";
import CenteredText from "../components/CenteredText";
import ImageExperience from "../components/ImageExperience";
import ProjectCard from "../components/ProjectCard";
import Container from "../components/Container";
import "bootstrap/dist/css/bootstrap.css";
import {
  whyDeveloperBackground,
  skillsBackground,
  projectsBackground,
  ongoingProjectsBackground,
  footerBackground,
  paddingDefault,
  paddingBottom
} from "../stylesheets/Home.module.sass";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import { titleFontSize } from "../stylesheets/components/Heading.module.sass";

const content = require("../data/content");
const hero = require("../data/hero");
const personalSkills = require("../data/personalSkills");
const ongoingProjects = require("../data/ongoingProjects");
const projects = require("../data/projects");

const Home = () => {
  return (
    <React.Fragment>
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
      </div>

      <div className={`${whyDeveloperBackground} ${paddingDefault}`}>
        <Heading className={paddingBottom} text={content.heroTitle} />
        <Container title={content.projectsTitle}>
          <CenteredText title={content.heroTitle} text={content.heroText} />
        </Container>
      </div>

      <div className={`${projectsBackground} ${paddingDefault}`}>
        <Heading className={paddingBottom} text={content.projectsTitle} />
        <Container title={content.projectsTitle}>
          {projects.map(project => (
            <ProjectCard
              imageLink={project.imageLink}
              imageAlt={project.imageAlt}
              title={project.title}
              subtitle={project.subtitle}
              text={project.text}
            />
          ))}
        </Container>
      </div>

      <div className={`${skillsBackground} ${paddingDefault}`}>
        <Heading className={paddingBottom} text={content.skillsTitle} />
        <Container>
          {personalSkills.map(personalSkill => (
            <ImageExperience
              imageLink={personalSkill.imageLink}
              imageAlt={personalSkill.imageAlt}
              title={personalSkill.title}
              subtitle={personalSkill.subtitle}
              text={personalSkill.text}
            />
          ))}
        </Container>
      </div>

      <div className={`${ongoingProjectsBackground} ${paddingDefault}`}>
        <Heading
          className={paddingBottom}
          text={content.ongoingProjectsTitle}
        />
        <Container>
          {ongoingProjects.map(project => (
            <ProjectCard
              imageLink={project.imageLink}
              imageAlt={project.imageAlt}
              title={project.title}
              subtitle={project.subtitle}
              text={project.text}
            />
          ))}
        </Container>
      </div>

      <div className={`${footerBackground} ${paddingDefault}`}>
        <Container>
          <Footer />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Home;
