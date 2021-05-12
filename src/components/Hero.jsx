import React from "react";
import PropTypes from "prop-types";

import {
  introFont,
  introMargin,
  introHeadingStyle,
  introLeadInStyle,
  box,
} from "../stylesheets/components/Hero.module.sass";

const Hero = ({ introHeading, introLeadIn, resumeButtonText, resumeLink }) => (
  <div className={`${introMargin}`}>
    <div className={`${introHeadingStyle} ${introFont}`}>{introHeading}</div>
    <div className={`${introLeadInStyle} ${introFont}`}>{introLeadIn}</div>
    <a href={resumeLink} className={`${box} ${introFont}`}>
      {resumeButtonText}
    </a>
  </div>
);

Hero.propTypes = {
  introHeading: PropTypes.string.isRequired,
  introLeadIn: PropTypes.string.isRequired,
  resumeButtonText: PropTypes.string.isRequired,
  resumeLink: PropTypes.string.isRequired,
};

export default Hero;
