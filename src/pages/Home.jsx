import React from "react";
import ProgressiveImage from "react-progressive-image";
import Hero from "../components/Hero";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "../components/Util/Container";
import NavigationBar from "../components/Navbar/NavigationBar";
import {
  arrowMargin,
  arrowSize,
  footerBackground,
  footerPadding,
  heroBackground,
  skillsBackground,
  noMargin,
} from "../stylesheets/Home.module.sass";
import Footer from "../components/Footer/Footer";
import ArrowAnimation from "../components/Animations/ArrowAnimation";
import { folders, getRandomInt } from "../utils/FileManager.utils";
import HorizontalRuler from "../components/Util/HorizontalRuler";
import AboutMe from "../components/Section/AboutMe";
import Projects from "../components/Section/Projects";
import Skills from "../components/Section/Skills";
import BlogShowcase from "../components/Section/BlogShowcase";

const navbar = require("../data/navbar");
const content = require("../data/content");
const hero = require("../data/hero");

const Home = () => {
  const randomHeroImageNumber = getRandomInt(folders.heroImages.length);
  const heroImageUrl = folders.heroImages[randomHeroImageNumber];
  const tinyHeroImageUrl = folders.tinyHeroImages[randomHeroImageNumber];

  const horizontalRuler = (
    <div className={skillsBackground}>
      <Container>
        <HorizontalRuler isThick className={noMargin} />
      </Container>
    </div>
  );

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
      {horizontalRuler}
      <Projects id={content.projectsReference} />
      {horizontalRuler}
      <Skills id={content.skillsReference} />
      {horizontalRuler}

      <BlogShowcase id={content.latestBlogPostsReference} />

      <div id={content.contactReference} className={`${footerBackground} ${footerPadding}`}>
        <Container noPadding>
          <Footer />
        </Container>
      </div>
    </>
  );
};

export default Home;
