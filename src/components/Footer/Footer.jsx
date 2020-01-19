import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import {
  footerDarkText,
  footerLightText,
  leftText,
  lineSeparator,
  footerName,
  footerList
} from "../../stylesheets/components/Footer/Footer.module.sass";

import SocialMediaBar from "./SocialMediaBar";
import Signature from "../Signature";

const Footer = ({ content, signatureImage }) => {
  return (
    <footer className="col-md-12 px-0 pt-md-2">
      <Row>
        <div className={`col-md-6 ${lineSeparator} pr-md-5 pb-3 pb-md-0 mx-3 mx-md-0`}>
          <p
            className={`${leftText} ${footerLightText}
             h-100 d-flex justify-content-center flex-column text-center text-md-right`}
          >
            {content.leftText}
          </p>
        </div>

        <div className="pl-md-5 col-md-6 my-auto text-center text-md-left pt-3 pt-md-0">
          <p className={`${footerLightText} ${footerName} mb-1`}>{content.title}</p>
          <p className={`${footerLightText} mb-3`}>London, UK</p>
          <SocialMediaBar socialMediaLinks={content.socialMediaLinks} />
          <div className="pt-4">
            <p className={`mb-1 ${footerLightText}`}>{content.linkText}</p>
            <ul className={`pl-md-2 pl-0 ${footerLightText} ${footerList} mb-0`}>
              <li>
                <a href={content.link1} className={footerDarkText}>
                  {content.text1}
                </a>
              </li>
              <li>
                <a href={content.link2} className={footerDarkText}>
                  {content.text2}
                </a>
              </li>
              <li>
                <a href={content.link3} className={footerDarkText}>
                  {content.text3}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Row>

      <Signature className="mt-4 mb-2" signatureImage={signatureImage} isDark />
      <p className={`text-center mb-0 ${footerDarkText}`}>{content.date}</p>
    </footer>
  );
};

Footer.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    leftText: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    link1: PropTypes.string.isRequired,
    link2: PropTypes.string.isRequired,
    link3: PropTypes.string.isRequired,
    text1: PropTypes.string.isRequired,
    text2: PropTypes.string.isRequired,
    text3: PropTypes.string.isRequired,
    socialMediaLinks: PropTypes.shape({
      twitterLink: PropTypes.string.isRequired,
      facebookLink: PropTypes.string.isRequired,
      linkedinLink: PropTypes.string.isRequired,
      githubLink: PropTypes.string.isRequired,
      instagramLink: PropTypes.string.isRequired,
      emailLink: PropTypes.string.isRequired
    }),
    date: PropTypes.string.isRequired
  }).isRequired,
  signatureImage: PropTypes.string.isRequired
};

export default Footer;
