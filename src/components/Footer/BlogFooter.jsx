import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";

import SocialMediaBar from "./SocialMediaBar";
import Signature from "../Signature";

import {
  socialMediaButtonBackground,
  socialMediaButtonBackgroundDark
} from "../../stylesheets/components/Footer/BlogFooter.module.sass";

const BlogFooter = ({ content, signatureImage, isDark }) => {
  return (
    <footer className="text-center">
      <Row>
        <div className="col-md-4 pb-md-0 pb-3">
          <span>{content.title}</span>
          <Signature signatureImage={signatureImage} isDark={isDark} />
        </div>
        <div className="col-md-8 my-auto px-0">
          <SocialMediaBar
            socialMediaLinks={content.socialMediaLinks}
            buttonBackground={
              isDark ? socialMediaButtonBackgroundDark : socialMediaButtonBackground
            }
          />
        </div>
      </Row>
    </footer>
  );
};

BlogFooter.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    socialMediaLinks: PropTypes.shape({
      twitterLink: PropTypes.string.isRequired,
      facebookLink: PropTypes.string.isRequired,
      linkedinLink: PropTypes.string.isRequired,
      githubLink: PropTypes.string.isRequired,
      instagramLink: PropTypes.string.isRequired,
      emailLink: PropTypes.string.isRequired
    })
  }).isRequired,
  signatureImage: PropTypes.string.isRequired,
  isDark: PropTypes.bool
};

BlogFooter.defaultProps = {
  isDark: false
};

export default BlogFooter;
