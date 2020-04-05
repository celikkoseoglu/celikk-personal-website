import React from "react";
import PropTypes from "prop-types";
import {
  noMargin,
  navbarFlex,
  centerDarkModeToggle,
  button1,
  button2,
} from "../../stylesheets/components/Navbar/BlogNavbar.module.sass";
import CustomButton from "../CustomButton";
import DarkModeToggle from "../DarkModeToggle";

const BlogNavbar = ({
  button1Text,
  button1Link,
  button2Text,
  button2Link,
  className,
  isDark,
  setIsDark,
}) => {
  const getTitleOrButton = (text, link) => {
    return link ? (
      <CustomButton isDark={isDark} text={text} to={link} />
    ) : (
      <h1 className={noMargin}>{text}</h1>
    );
  };

  return (
    <div className={`${navbarFlex} ${className}`}>
      <div className={button1}>{getTitleOrButton(button1Text, button1Link, isDark)}</div>
      <div className={centerDarkModeToggle}>
        <DarkModeToggle onClickMethod={setIsDark} isDark={isDark} setIsDark={setIsDark} />
      </div>
      <div className={button2}>{getTitleOrButton(button2Text, button2Link, isDark)}</div>
    </div>
  );
};

BlogNavbar.propTypes = {
  button1Text: PropTypes.string,
  button1Link: PropTypes.string,
  button2Text: PropTypes.string,
  button2Link: PropTypes.string,
  className: PropTypes.string,
  isDark: PropTypes.bool.isRequired,
  setIsDark: PropTypes.func.isRequired,
};

BlogNavbar.defaultProps = {
  button1Text: null,
  button1Link: null,
  button2Text: null,
  button2Link: null,
  className: null,
};

export default BlogNavbar;
