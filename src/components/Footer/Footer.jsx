import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import {
  linkColor,
  leftText,
  borderRight,
  name
} from "../../stylesheets/components/Footer/Footer.module.sass";

import SocialMediaBar from "./SocialMediaBar";
import Signature from "../Signature";
import HorizontalRuler from "./HorizontalRuler";

const Footer = ({ content, signatureImage }) => {
  return (
    <footer className="col-md-12 px-0">
      <Row>
        <div className={`col-md-6 ${borderRight}`}>
          <p className={leftText}>LET&apos;S MEET</p>
        </div>

        <div className="col-md-6">
          <p className={name}>Celik Koseoglu</p>
          <p>London, UK</p>
          <SocialMediaBar socialMediaLinks={content.socialMediaLinks} />
          <HorizontalRuler isDark />

          <div>
            <p>I&apos;ve streamed myself making this website. Here are some videos</p>
            <ul className="pl-3">
              <li>
                <a href={content.link} className={linkColor}>
                  Making the Navbar
                </a>
              </li>
              <li>
                <a href={content.link} className={linkColor}>
                  Creating the Footer
                </a>
              </li>
              <li>
                <a href={content.link} className={linkColor}>
                  Dark Mode for Blog
                </a>
              </li>
            </ul>
          </div>

          <Signature signatureImage={signatureImage} />
        </div>

        {/* <div className="col-md-3 col-lg-4"> */}
        {/*  <span>{content.title}</span> */}
        {/*  <div className="pt-md-3 pb-md-0 py-2"> */}

        {/*    </a> */}
        {/*  </div> */}
        {/* </div> */}

        {/* <div className="col-md-6 col-lg-4 my-auto px-0"> */}

        {/* </div> */}

        {/* <div className="col-md-3 col-lg-4"> */}
        {/*  <span>{content.date}</span> */}

        {/* </div> */}
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
