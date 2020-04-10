import React from "react";
import PropTypes from "prop-types";
import ProgressiveImage from "react-progressive-image";
import {
  heroContainer,
  arrowMargin,
  arrowSize,
  heroBackground,
} from "../../stylesheets/components/Section/Landing.module.sass";
import Container from "../Util/Container";
import ArrowAnimation from "../Animations/ArrowAnimation";
import { folders, getRandomInt } from "../../utils/FileManager.utils";
import Hero from "../Hero";

const hero = require("../../data/hero");

const randomLandingImageNumber = getRandomInt(folders.heroImages.length);
const landingImageUrl = folders.heroImages[randomLandingImageNumber];
const tinyLandingImageUrl = folders.tinyHeroImages[randomLandingImageNumber];

const Landing = ({ id, arrowAnimationReference }) => {
  return (
    <ProgressiveImage src={landingImageUrl} placeholder={tinyLandingImageUrl}>
      {(src) => (
        <header
          id={id}
          style={{
            backgroundImage: `url(${src})`,
          }}
          className={`${heroBackground}`}
        >
          <Container className={heroContainer}>
            <Hero
              introHeading={hero.introHeading}
              introLeadIn={hero.introLeadIn}
              resumeButtonText={hero.resumeButtonText}
              resumeLink={hero.resumeButtonLink}
            />
          </Container>

          <ArrowAnimation
            className={`${arrowMargin} ${arrowSize}`}
            reference={arrowAnimationReference}
          />
        </header>
      )}
    </ProgressiveImage>
  );
};

Landing.propTypes = {
  id: PropTypes.string.isRequired,
  arrowAnimationReference: PropTypes.string.isRequired,
};

export default Landing;
