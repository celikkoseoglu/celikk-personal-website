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
import Wall from "../data/images/wall.jpg";
import Contact from "../components/Contact";
import NavigationBar from "../components/Navbar/NavigationBar";
import { folders, mapFileNameToId } from "../utils/FileManager.utils";

const navbar = require("../data/navbar");
const content = require("../data/content");
const hero = require("../data/hero");
const personalSkills = require("../data/personalSkills");
const ongoingProjects = require("../data/ongoingProjects");
const projects = require("../data/projects");
const contact = require("../data/contact");

const Home = () => {
  return (
    <React.Fragment>
      <NavigationBar content={navbar} />
      <header
        id={content.heroReference}
        style={{ backgroundImage: `url(${Wall})` }}
        className={heroBackground}
      >
        <Container>
          <Hero
            introHeading={hero.introHeading}
            introLeadIn={hero.introLeadIn}
            resumeButtonText={hero.resumeButtonText}
            resumeLink={hero.resumeButtonLink}
          />
        </Container>
      </header>

      <section className={`${whyDeveloperBackground} ${sectionPadding}`}>
        <Heading className={paddingBottom} text={content.introTitle} />
        <Container>
          <CenteredText title={content.introTitle} text={content.introText} />
        </Container>
      </section>

      <section id={content.projectsReference} className={`${projectsBackground} ${sectionPadding}`}>
        <Heading className={paddingBottom} text={content.projectsTitle} />
        <Container title={content.projectsTitle}>
          <Row>
            {projects.map(project => (
              <ProjectCard
                imageLink={mapFileNameToId(project.imageLink, folders.projectImages)}
                imageAlt={project.imageAlt}
                title={project.title}
                subtitle={project.subtitle}
                text={project.text}
                blogPost={mapFileNameToId(project.blogPost, folders.blogFiles)}
                key={project.title}
              />
            ))}
          </Row>
        </Container>
      </section>

      <section id={content.skillsReference} className={`${skillsBackground} ${sectionPadding}`}>
        <Heading className={paddingBottom} text={content.skillsTitle} />
        <Container>
          {personalSkills.map(personalSkill => (
            <ImageExperience
              rightAlign={personalSkill.rightAlign}
              imageLink={mapFileNameToId(personalSkill.imageLink, folders.personalSkillImages)}
              imageAlt={personalSkill.imageAlt}
              title={personalSkill.title}
              subtitle={personalSkill.subtitle}
              text={personalSkill.text}
              key={personalSkill.title}
            />
          ))}
        </Container>
      </section>

      <section
        id={content.ongoingProjectsReference}
        className={`${ongoingProjectsBackground} ${sectionPadding}`}
      >
        <Heading className={paddingBottom} text={content.ongoingProjectsTitle} />
        <Container>
          <Row>
            {ongoingProjects.map(project => (
              <ProjectCard
                imageLink={mapFileNameToId(project.imageLink, folders.ongoingProjectImages)}
                imageAlt={project.imageAlt}
                title={project.title}
                subtitle={project.subtitle}
                text={project.text}
                blogPost={mapFileNameToId(project.blogPost, folders.blogFiles)}
                key={project.title}
              />
            ))}
          </Row>
        </Container>
      </section>

      <section id={content.contactReference} className={`${contactBackground} ${sectionPadding}`}>
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
      </section>

      <div className={`${footerBackground} ${footerPadding}`}>
        <Container>
          <Footer />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Home;
