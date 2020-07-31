import React from "react";
import PropTypes from "prop-types";
import {
  noMargin,
  titleFont,
  titleShadow,
  titleShadowDark,
  navbarFlex,
  darkModeToggle,
  brandingContainer,
  branding,
  brandingDark,
  blogLinkBranding,
  blogLinkBrandingDark,
  defaultCursor,
  pointerCursor,
} from "../../stylesheets/components/Navbar/BlogNavbar.module.sass";
import DarkModeToggle from "../DarkModeToggle";
import UnstyledLink from "../Util/UnstyledLink";

import BrandingLight from "../../data/images/blog-branding-light.svg";
import BrandingDark from "../../data/images/blog-branding-dark.svg";

const BlogNavbar = ({ headerText, headerLink, brandingLink, isDark, setIsDark, className }) => {
  const header = <h1 className={`${noMargin} ${titleFont}`}>{headerText}</h1>;

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

        {getTitleOrButton(headerText, headerLink, isDark)}
      </div>
      <div className={darkModeToggle}>
        <DarkModeToggle onClickMethod={setIsDark} isDark={isDark} setIsDark={setIsDark} />
      </div>
    </div>
  );
};

BlogNavbar.propTypes = {
  headerText: PropTypes.string.isRequired,
  headerLink: PropTypes.string,
  brandingLink: PropTypes.string.isRequired,
  isDark: PropTypes.bool.isRequired,
  setIsDark: PropTypes.func.isRequired,
  className: PropTypes.string,
};

BlogNavbar.defaultProps = {
  headerLink: null,
  className: null,
};

export default BlogNavbar;
