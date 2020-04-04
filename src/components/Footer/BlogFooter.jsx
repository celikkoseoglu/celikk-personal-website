import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";

import SocialMediaBar from "./SocialMediaBar";
import Signature from "../Signature";

import {
  socialMediaButtonBackground,
  socialMediaButtonBackgroundDark,
} from "../../stylesheets/components/Footer/BlogFooter.module.sass";

const footer = require("../../data/footer");

const BlogFooter = ({ isDark }) => {
  return (
    <footer className="text-center">
      <Row>
        <div className="col-md-4 pb-md-0 pb-3">
          <span>{footer.title}</span>
          <Signature isDark={isDark} />
        </div>
        <div className="col-md-8 my-auto px-0">
          <SocialMediaBar
            socialMediaLinks={footer.socialMediaLinks}
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
  isDark: PropTypes.bool,
};

BlogFooter.defaultProps = {
  isDark: false,
};

export default BlogFooter;
