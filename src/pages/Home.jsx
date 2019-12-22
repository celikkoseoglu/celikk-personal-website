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
  arrowMargin,
  arrowSize,
  heroBackground
} from "../stylesheets/Home.module.sass";
import Footer from "../components/Footer/Footer";
import Heading from "../components/Heading";
import Contact from "../components/Contact";
import NavigationBar from "../components/Navbar/NavigationBar";
import Signature from "../data/images/signature.svg";
import ArrowAnimation from "../components/Animations/ArrowAnimation";
import { folders, getRandomInt } from "../utils/FileManager.utils";

const navbar = require("../data/navbar");
const content = require("../data/content");
const hero = require("../data/hero");
const personalSkills = require("../data/personalSkills");
const ongoingProjects = require("../data/ongoingProjects");
const projects = require("../data/projects");
const contact = require("../data/contact");
const footer = require("../data/footer");

const Home = () => {
  return (
    <>
      <NavigationBar content={navbar} />
      <header
        id={content.heroReference}
        style={{
          backgroundImage: `url(${folders.heroImages[getRandomInt(folders.heroImages.length)]})`
        }}
        className={`${heroBackground}`}
      >
        <Container className="h-100 d-flex justify-content-center flex-column">
          <Hero
            introHeading={hero.introHeading}
            introLeadIn={hero.introLeadIn}
            resumeButtonText={hero.resumeButtonText}
            resumeLink={hero.resumeButtonLink}
          />
        </Container>

        <ArrowAnimation
          className={`fixed-relative ${arrowMargin} ${arrowSize} mx-auto`}
          reference={content.whyADeveloperReference}
        />
      </header>

      <section
        id={content.whyADeveloperReference}
        className={`${whyDeveloperBackground} ${sectionPadding}`}
      >
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
                imageLink={project.imageLink}
                imageAlt={project.imageAlt}
                title={project.title}
                subtitle={project.subtitle}
                text={project.text}
                blogPost={project.blogPost}
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
              imageLink={personalSkill.imageLink}
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
                imageLink={project.imageLink}
                imageAlt={project.imageAlt}
                title={project.title}
                subtitle={project.subtitle}
                text={project.text}
                blogPost={project.blogPost}
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
          <Footer content={footer} signatureImage={Signature} />
        </Container>
      </div>
    </>
  );
};

export default Home;
