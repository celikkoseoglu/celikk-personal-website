import React from "react";
import ProgressiveImage from "react-progressive-image";
import PropTypes from "prop-types";
import {
  description,
  image,
  ruler,
  heading,
  titleRow,
  descriptionRow,
  listItemStyle,
  listPadding,
} from "../../stylesheets/components/Section/AboutMe.module.sass";
import Heading from "../Heading";
import HorizontalRuler from "../Footer/HorizontalRuler";
import Section from "../Util/Section";
import Container from "../Util/Container";
import Row from "../Util/Row";
import { folders } from "../../utils/FileManager.utils";

const aboutMe = require("../../data/aboutMe");

const AboutMe = ({ id }) => {
  const profileImage = folders.aboutMeImages[0];
  const profileImageTiny = folders.tinyHeroImages[1];

  return (
    <Section id={id}>
      <Container>
        <Row className={`${titleRow}`}>
          <Heading text={aboutMe.title} className={heading} />
          <HorizontalRuler isThick className={ruler} />
        </Row>
        <Row className={`${descriptionRow}`}>
          <div className={description}>
            <p>{aboutMe.descriptionHead}</p>
            <ul className={listPadding}>
              {aboutMe.items.map((item) => (
                <li key={item} className={listItemStyle}>{item}</li>
              ))}
            </ul>
            <p>{aboutMe.descriptionTail}</p>
          </div>
          <ProgressiveImage src={profileImage} placeholder={profileImageTiny}>
            {(src) => <img className={image} alt={aboutMe.portraitAlt} src={src} />}
          </ProgressiveImage>
        </Row>
      </Container>
    </Section>
  );
};

AboutMe.propTypes = {
  id: PropTypes.string.isRequired,
};

export default AboutMe;
