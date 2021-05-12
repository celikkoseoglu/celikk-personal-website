import React from "react";
import PropTypes from "prop-types";
import {
  customButton,
  customButtonDark,
  textCenter,
} from "../stylesheets/components/CustomButton.module.sass";
import UnstyledLink from "./Util/UnstyledLink";

const CustomButton = ({ text, to, href, isDark, className }) => (
  <UnstyledLink
    to={to}
    href={href}
    className={`${textCenter} ${customButton} ${className} ${isDark ? customButtonDark : null}`}
  >
    {text}
  </UnstyledLink>
);

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string,
  href: PropTypes.string,
  isDark: PropTypes.bool,
  className: PropTypes.string,
};

CustomButton.defaultProps = {
  to: null,
  href: null,
  isDark: false,
  className: null,
};

export default CustomButton;
