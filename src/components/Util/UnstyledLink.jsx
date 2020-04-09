import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { noDecoration } from "../../stylesheets/components/Util/UnstyledLink.module.sass";

const UnstyledLink = ({ className, to, children }) => {
  return (
    <Link className={`${className} ${noDecoration}`} to={to}>
      {children}
    </Link>
  );
};

UnstyledLink.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
  children: PropTypes.node
};

UnstyledLink.defaultProps = {
  className: null,
  children: null
};

export default UnstyledLink;
