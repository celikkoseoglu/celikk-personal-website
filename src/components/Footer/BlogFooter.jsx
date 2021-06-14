import React from "react";
import PropTypes from "prop-types";
import SocialMediaBar from "./SocialMediaBar";
import Signature from "../Signature";
import {
  socialMediaButtonBackground,
  socialMediaButtonBackgroundDark,
  footerStyle,
  title,
  darkTitle,
  socialMediaBar,
} from "../../stylesheets/components/Footer/BlogFooter.module.sass";

const footer = require("../../data/footer.json");

const BlogFooter = ({ isDark }) => (
  <footer className={footerStyle}>
    <div className={title}>
      <span className={isDark ? darkTitle : null}>{footer.title}</span>
      <Signature isDark={isDark} />
    </div>
    <div className={socialMediaBar}>
      <SocialMediaBar
        socialMediaLinks={footer.socialMediaLinks}
        buttonBackground={isDark ? socialMediaButtonBackgroundDark : socialMediaButtonBackground}
      />
    </div>
  </footer>
);

BlogFooter.propTypes = {
  isDark: PropTypes.bool,
};

BlogFooter.defaultProps = {
  isDark: false,
};

export default BlogFooter;
