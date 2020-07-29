import React from "react";
import PropTypes from "prop-types";
import {
  noMargin,
  titleFont,
  titleShadow,
  titleShadowDark,
  navbarFlex,
  centerDarkModeToggle,
  brandingContainer,
  branding,
  brandingDark,
  blogLinkBranding,
  blogLinkBrandingDark,
  defaultCursor,
  pointerCursor,
} from "../../stylesheets/components/Navbar/BlogNavbar.module.sass";
import DarkModeToggle from "../DarkModeToggle";

import BrandingLight from "../../data/images/blog-branding-light.svg";
import BrandingDark from "../../data/images/blog-branding-dark.svg";
import UnstyledLink from "../Util/UnstyledLink";

const BlogNavbar = ({ button1Text, button1Link, brandingLink, className, isDark, setIsDark }) => {
  const header = (
    <h1 className={`${noMargin} ${titleFont}`}>
      {button1Text}
    </h1>
  );

  const getTitleOrButton = (text, link) => {
    return link ? (
      <UnstyledLink
        className={`${isDark ? blogLinkBrandingDark : blogLinkBranding} ${pointerCursor}`}
        to={link}
      >
        {header}
      </UnstyledLink>
    ) : (
      <span className={`${defaultCursor} ${isDark ? titleShadowDark : titleShadow}`}>{header}</span>
    );
  };

  return (
    <div className={`${navbarFlex} ${className}`}>
      <div className={brandingContainer}>
        <UnstyledLink to={brandingLink}>
          <img
            className={`${branding} ${isDark && brandingDark}`}
            alt="branding-logo"
            src={isDark ? BrandingDark : BrandingLight}
          />
        </UnstyledLink>

        {getTitleOrButton(button1Text, button1Link, isDark)}
      </div>
      <div className={centerDarkModeToggle}>
        <DarkModeToggle onClickMethod={setIsDark} isDark={isDark} setIsDark={setIsDark} />
      </div>
    </div>
  );
};

BlogNavbar.propTypes = {
  button1Text: PropTypes.string.isRequired,
  button1Link: PropTypes.string,
  brandingLink: PropTypes.string.isRequired,
  className: PropTypes.string,
  isDark: PropTypes.bool.isRequired,
  setIsDark: PropTypes.func.isRequired,
};

BlogNavbar.defaultProps = {
  className: null,
  button1Link: null,
};

export default BlogNavbar;
