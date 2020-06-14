import React, { useEffect, useState } from "react";
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
import { debounce } from "../../utils/Limitors";
import { isPrerendering } from "../../utils/ReactSnapHelper";

const hero = require("../../data/hero");

const randomLandingImageNumber = getRandomInt(folders.heroImages.length);
const landingImageUrl = folders.heroImages[randomLandingImageNumber];
const tinyLandingImageUrl = folders.tinyHeroImages[randomLandingImageNumber];

let windowInnerWidth = 0;

const Landing = ({ id, arrowAnimationReference }) => {
  /* the rendering of this component needs to be deferred because react-snap tries to take a
     snapshot of the progressive image before the final image loads. This breaks progressive
     image loading. Until react-snap provides an `exclude` option, deferring the rendering of
     this component seems to be the simplest solution.
   */
  const basicPrerender = (
    <header id={id} className={`${heroBackground}`}>
      <Container className={heroContainer}>
        <Hero
          introHeading={hero.introHeading}
          introLeadIn={hero.introLeadIn}
          resumeButtonText={hero.resumeButtonText}
          resumeLink={hero.resumeButtonLink}
        />
      </Container>
    </header>
  );

  const [innerHTML, setInnerHTML] = useState(basicPrerender);

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

    setInnerHTML(
      !isPrerendering() ? (
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
      ) : (
        basicPrerender
      )
    );

    return () => {
      if (iPad) {
        window.removeEventListener("resize", debounce(handleResize));
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return innerHTML;
};
Landing.propTypes = {
  id: PropTypes.string.isRequired,
  arrowAnimationReference: PropTypes.string.isRequired,
};

export default Landing;
