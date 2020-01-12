import React from "react";
import PropTypes from "prop-types";
import { customButton } from "../stylesheets/components/CustomButton.module.sass";
import UnstyledLink from "./Util/UnstyledLink";

const CustomButton = ({ text, to, href, className }) => {
  return (
    <UnstyledLink to={to} href={href} className={`text-center ${className} ${customButton}`}>
      {text}
    </UnstyledLink>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string
};

CustomButton.defaultProps = {
  to: null,
  href: null,
  className: null
};

export default CustomButton;
