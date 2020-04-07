import React from "react";
import ProgressiveImage from "react-progressive-image";
import Hero from "../components/Hero";
import SkillCard from "../components/SkillCard";
import ProjectCard from "../components/ProjectCard";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "../components/Util/Container";
import Row from "../components/Util/Row";
import {
  arrowMargin,
  arrowSize,
  blogShowcaseContainer,
  footerBackground,
  footerPadding,
  heroBackground,
  latestBlogPostsBackground,
  paddingBottom,
  projectsBackground,
  sectionPadding,
  skillsBackground,
  noMargin,
  projectsSection,
} from "../stylesheets/Home.module.sass";
import Footer from "../components/Footer/Footer";
import Heading from "../components/Heading";
import NavigationBar from "../components/Navbar/NavigationBar";
import ArrowAnimation from "../components/Animations/ArrowAnimation";
import { folders, getRandomInt } from "../utils/FileManager.utils";
import BlogShowcaseCard from "../components/BlogShowcase/BlogShowcaseCard";
import { BLOG_LINK } from "../utils/Constants.utils";
import BlogShowcaseButton from "../components/BlogShowcase/BlogShowcaseButton";
import {
  NUMBER_OF_LATEST_BLOG_CARDS_TO_RENDER_ON_MOBILE,
  retrieveLatestBlogPosts,
} from "../utils/LatestBlogsFetcher";
import HorizontalRuler from "../components/Footer/HorizontalRuler";
import AboutMe from "../components/Section/AboutMe";

const navbar = require("../data/navbar");
const content = require("../data/content");
const hero = require("../data/hero");
const personalSkills = require("../data/personalSkills");
const projects = require("../data/projects");
const blog = require("../data/blog");

const Home = () => {
  const randomHeroImageNumber = getRandomInt(folders.heroImages.length);
  const heroImageUrl = folders.heroImages[randomHeroImageNumber];
  const tinyHeroImageUrl = folders.tinyHeroImages[randomHeroImageNumber];

  return (
    <>
      <NavigationBar content={navbar} />

      <ProgressiveImage src={heroImageUrl} placeholder={tinyHeroImageUrl}>
        {(src) => (
          <header
            id={content.heroReference}
            style={{
              backgroundImage: `url(${src})`,
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

      <AboutMe id={content.whyADeveloperReference} />

      <div className={skillsBackground}>
        <Container>
          <HorizontalRuler isThick className={noMargin} />
        </Container>
      </div>

      <section id={content.projectsReference} className={`${projectsBackground} ${sectionPadding}`}>
        <Heading className={paddingBottom} text={content.projectsTitle} />
        <div className={`${projectsSection} mx-auto`}>
          <Row className="justify-content-center">
            {projects.map((project) => (
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
        </div>
      </section>

      <div className={skillsBackground}>
        <Container>
          <HorizontalRuler isThick className={noMargin} />
        </Container>
      </div>

      <section id={content.skillsReference} className={`${skillsBackground} ${sectionPadding}`}>
        <Heading className={noMargin} text={content.skillsTitle} />
        {personalSkills.map((personalSkill) => (
          <SkillCard
            imageLink={personalSkill.imageLink}
            imageAlt={personalSkill.imageAlt}
            text={personalSkill.text}
            key={personalSkill.imageAlt}
          />
        ))}
      </section>

      <div className={skillsBackground}>
        <Container>
          <HorizontalRuler isThick className={noMargin} />
        </Container>
      </div>

      <section
        id={content.latestBlogPostsReference}
        className={`${latestBlogPostsBackground} ${sectionPadding}`}
      >
        <Heading className={paddingBottom} text={content.latestBlogPostsTitle} />
        <Container className={blogShowcaseContainer}>
          <Row className="justify-content-center">
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

          <BlogShowcaseButton link={BLOG_LINK} text={content.viewAllBlogPostsButton} />
        </Container>
      </section>

      <div id={content.contactReference} className={`${footerBackground} ${footerPadding}`}>
        <Container>
          <Footer />
        </Container>
      </div>
    </>
  );
};

export default Home;
