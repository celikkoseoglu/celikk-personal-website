import React, { useEffect } from "react";
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
import { iPad } from "../../utils/Constants.utils";
import {debounce} from "../../utils/Limitors";

const hero = require("../../data/hero");

const randomLandingImageNumber = getRandomInt(folders.heroImages.length);
const landingImageUrl = folders.heroImages[randomLandingImageNumber];
const tinyLandingImageUrl = folders.tinyHeroImages[randomLandingImageNumber];

let windowInnerWidth = 0;

const Landing = ({ id, arrowAnimationReference }) => {
  const handleResize = () => {
    const currentWindowInnerWidth = window.innerWidth;
    if (currentWindowInnerWidth !== windowInnerWidth) {
      windowInnerWidth = currentWindowInnerWidth;
      const windowInnerHeight = window.innerHeight;
      document.documentElement.style.setProperty("--windowInnerHeight", `${windowInnerHeight}px`);
    }
  };

  if (iPad) {
    handleResize();
  }

  useEffect(() => {
    if (iPad) {
      window.addEventListener("resize", debounce(handleResize));
    }
    return () => {
      if (iPad) {
        window.removeEventListener("resize", debounce(handleResize));
      }
    };
  });

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
