import React from "react";
import PropTypes from "prop-types";
import {
  noMargin,
  titleFont,
  title,
  titleDark,
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
import BlogBrandingLogo from "../Animations/BlogBrandingLogo";

const BlogNavbar = ({ headerText, headerLink, brandingLink, isDark, setIsDark, className }) => {
  const header = <h1 className={`${noMargin} ${titleFont}`}>{headerText}</h1>;

  const getTitleOrButton = (text, link) =>
    link ? (
      <UnstyledLink
        className={`${isDark ? blogLinkBrandingDark : blogLinkBranding} ${pointerCursor}`}
        to={link}
      >
        {header}
      </UnstyledLink>
    ) : (
      <span className={`${defaultCursor} ${isDark ? titleDark : title}`}>{header}</span>
    );

  return (
    <div className={`${navbarFlex} ${className}`}>
      <div className={brandingContainer}>
        <UnstyledLink to={brandingLink}>
          <BlogBrandingLogo className={`${branding} ${isDark && brandingDark}`} isDark={isDark} />
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
