import React from "react";
import "font-awesome/css/font-awesome.min.css";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import { linkColor, signature } from "../../stylesheets/components/Footer.module.sass";

import SocialMediaBar from "./SocialMediaBar";

const Footer = ({ content, signatureImage }) => {
  return (
    <footer className="text-center col-md-12">
      <Row>
        <div className="col-md-3 col-lg-4">
          <span>{content.title}</span>
          <div className="pt-md-3 pb-md-0 py-2">
            <a href={content.link} className={linkColor}>
              {content.linkText}
            </a>
          </div>
        </div>

        <div className="col-md-6 col-lg-4 my-auto px-0">
          <SocialMediaBar socialMediaLinks={content.socialMediaLinks} />
        </div>

        <div className="col-md-3 col-lg-4">
          <span>{content.date}</span>
          <img
            src={signatureImage}
            alt="signature"
            className={`img-responsive img-centered ${signature}`}
          />
        </div>
      </Row>
    </footer>
  );
};

Footer.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
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
