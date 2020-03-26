import React from "react";
import ProgressiveImage from "react-progressive-image";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import Hero from "../components/Hero";
import CenteredText from "../components/CenteredText";
import ImageExperience from "../components/ImageExperience";
import ProjectCard from "../components/ProjectCard";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  whyDeveloperBackground,
  skillsBackground,
  projectsBackground,
  ongoingProjectsBackground,
  latestBlogPostsBackground,
  footerBackground,
  sectionPadding,
  footerPadding,
  paddingBottom,
  arrowMargin,
  arrowSize,
  heroBackground,
  blogShowcaseContainer
} from "../stylesheets/Home.module.sass";
import Footer from "../components/Footer/Footer";
import Heading from "../components/Heading";
import NavigationBar from "../components/Navbar/NavigationBar";
import Signature from "../data/images/signature.svg";
import ArrowAnimation from "../components/Animations/ArrowAnimation";
import { folders, getRandomInt } from "../utils/FileManager.utils";
import BlogShowcaseCard from "../components/BlogShowcase/BlogShowcaseCard";
import { BLOG_LINK } from "../utils/Constants.utils";
import BlogShowcaseButton from "../components/BlogShowcase/BlogShowcaseButton";
import {
  NUMBER_OF_LATEST_BLOG_CARDS_TO_RENDER_ON_MOBILE,
  retrieveLatestBlogPosts
} from "../utils/LatestBlogsFetcher";

const navbar = require("../data/navbar");
const content = require("../data/content");
const hero = require("../data/hero");
const personalSkills = require("../data/personalSkills");
const ongoingProjects = require("../data/ongoingProjects");
const projects = require("../data/projects");
const footer = require("../data/footer");
const blog = require("../data/blog");

const Home = () => {
  const randomHeroImageNumber = getRandomInt(folders.heroImages.length);
  const heroImageUrl = folders.heroImages[randomHeroImageNumber];
  const tinyHeroImageUrl = folders.tinyHeroImages[randomHeroImageNumber];

  return (
    <>
      <NavigationBar content={navbar} />

      <ProgressiveImage src={heroImageUrl} placeholder={tinyHeroImageUrl}>
        {src => (
          <header
            id={content.heroReference}
            style={{
              backgroundImage: `url(${src})`
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
        )}
      </ProgressiveImage>

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
              imageLink={personalSkill.imageLink}
              imageAlt={personalSkill.imageAlt}
              text={personalSkill.text}
              key={personalSkill.imageAlt}
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

      <section
        id={content.latestBlogPostsReference}
        className={`${latestBlogPostsBackground} ${sectionPadding}`}
      >
        <Heading className={paddingBottom} text={content.latestBlogPostsTitle} />
        <Container className={blogShowcaseContainer}>
          <Row className="d-flex justify-content-center">
            {retrieveLatestBlogPosts(blog).map((blogItem, index) => (
              <BlogShowcaseCard
                timestamp={blogItem.date}
                minutes={blogItem.minutes}
                blogPost={blogItem.blogPost}
                title={blogItem.title}
                subtitle={blogItem.subtitle}
                className={
                  index >= NUMBER_OF_LATEST_BLOG_CARDS_TO_RENDER_ON_MOBILE
                    ? "d-none d-xl-block"
                    : null
                }
                key={blogItem.title}
              />
            ))}
          </Row>

          <BlogShowcaseButton link={BLOG_LINK} text="View All Blog Posts" />
        </Container>
      </section>

      <div id={content.contactReference} className={`${footerBackground} ${footerPadding}`}>
        <Container>
          <Footer content={footer} signatureImage={Signature} />
        </Container>
      </div>
    </>
  );
};

export default Home;
