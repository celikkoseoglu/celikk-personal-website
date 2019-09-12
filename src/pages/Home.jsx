import React from "react";
import Hero from "../components/Hero";
import TitleAndText from "../components/TitleAndText";
import ImageExperience from "../components/ImageExperience";
import ProjectCard from "../components/ProjectCard";
import Container from "../components/Container";
import "bootstrap/dist/css/bootstrap.css";
import {
  skillsBackground,
  projectsBackground,
  ongoingProjectsBackground,
  footerBackground
} from "../stylesheets/Home.module.sass";
import Footer from "../components/Footer";
import Heading from "../components/Heading";

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

      <TitleAndText title={content.heroTitle} text={content.heroText} />

      <div className={projectsBackground}>
        <Heading text={content.projectsTitle} />
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

      <div className={skillsBackground}>
        <Heading text={content.skillsTitle} />
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

      <div className={ongoingProjectsBackground}>
        <Heading text={content.ongoingProjectsTitle} />
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

      <Container backgroundColor={footerBackground}>
        <Footer />
      </Container>
    </React.Fragment>
  );
};

export default Home;
