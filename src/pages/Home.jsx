import React from "react";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import Hero from "../components/Hero";
import CenteredText from "../components/CenteredText";
import ImageExperience from "../components/ImageExperience";
import ProjectCard from "../components/ProjectCard";
import "bootstrap/dist/css/bootstrap.css";
import {
  whyDeveloperBackground,
  skillsBackground,
  projectsBackground,
  ongoingProjectsBackground,
  contactBackground,
  footerBackground,
  sectionPadding,
  footerPadding,
  paddingBottom,
  heroBackground
} from "../stylesheets/Home.module.sass";
import Footer from "../components/Footer/Footer";
import Heading from "../components/Heading";
import Resume from "../data/resume/celikresume.pdf";
import Wall from "../data/images/wall.jpg";
import Contact from "../components/Contact";

const content = require("../data/content");
const hero = require("../data/hero");
const personalSkills = require("../data/personalSkills");
const ongoingProjects = require("../data/ongoingProjects");
const projects = require("../data/projects");
const contact = require("../data/contact");

const Home = () => {
  return (
    <React.Fragment>
      <div
        id={content.heroReference}
        style={{ backgroundImage: `url(${Wall})` }}
        className={heroBackground}
      >
        <Container>
          <Hero
            introHeading={hero.introHeading}
            introLeadIn={hero.introLeadIn}
            resumeButtonText={hero.resumeButtonText}
            resumeLink={Resume}
          />
        </Container>
      </div>

      <div className={`${whyDeveloperBackground} ${sectionPadding}`}>
        <Heading className={paddingBottom} text={content.introTitle} />
        <Container>
          <CenteredText title={content.introTitle} text={content.introText} />
        </Container>
      </div>

      <div
        id={content.projectsReference}
        className={`${projectsBackground} ${sectionPadding}`}
      >
        <Heading className={paddingBottom} text={content.projectsTitle} />
        <Container title={content.projectsTitle}>
          <Row>
            {projects.map(project => (
              <ProjectCard
                imageLink={project.imageLink}
                imageAlt={project.imageAlt}
                title={project.title}
                subtitle={project.subtitle}
                text={project.text}
              />
            ))}
          </Row>
        </Container>
      </div>

      <div
        id={content.skillsReference}
        className={`${skillsBackground} ${sectionPadding}`}
      >
        <Heading className={paddingBottom} text={content.skillsTitle} />
        <Container>
          {personalSkills.map(personalSkill => (
            <ImageExperience
              rightAlign={personalSkill.rightAlign}
              imageLink={personalSkill.imageLink}
              imageAlt={personalSkill.imageAlt}
              title={personalSkill.title}
              subtitle={personalSkill.subtitle}
              text={personalSkill.text}
            />
          ))}
        </Container>
      </div>

      <div
        id={content.ongoingProjectsReference}
        className={`${ongoingProjectsBackground} ${sectionPadding}`}
      >
        <Heading
          className={paddingBottom}
          text={content.ongoingProjectsTitle}
        />
        <Container>
          <Row>
            {ongoingProjects.map(project => (
              <ProjectCard
                imageLink={project.imageLink}
                imageAlt={project.imageAlt}
                title={project.title}
                subtitle={project.subtitle}
                text={project.text}
              />
            ))}
          </Row>
        </Container>
      </div>

      <div
        id={content.contactReference}
        className={`${contactBackground} ${sectionPadding}`}
      >
        <Container>
          <Contact
            name={contact.name}
            title={contact.title}
            contactTitle={contact.contactTitle}
            addressLine1={contact.addressLine1}
            addressLine2={contact.addressLine2}
            addressLine3={contact.addressLine3}
            imageLink={contact.imageLink}
            imageAlt={contact.imageAlt}
          />
        </Container>
      </div>

      <div className={`${footerBackground} ${footerPadding}`}>
        <Container>
          <Footer />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Home;
