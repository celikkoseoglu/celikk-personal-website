import React from "react";
import PropTypes from "prop-types";
import { customButton, customButtonDark } from "../stylesheets/components/CustomButton.module.sass";
import UnstyledLink from "./Util/UnstyledLink";

const CustomButton = ({ text, to, href, isDark }) => {
  return (
    <UnstyledLink
      to={to}
      href={href}
      className={`text-center ${customButton} ${isDark ? customButtonDark : null}`}
    >
      {text}
    </UnstyledLink>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string,
  href: PropTypes.string,
  isDark: PropTypes.bool
};

CustomButton.defaultProps = {
  to: null,
  href: null,
  isDark: false
};

export default CustomButton;
