import React from "react";
import PropTypes from "prop-types";
import { container } from "../stylesheets/components/Utils/Container.module.sass";

const Container = ({ className, children }) => {
  return <div className={`${className} ${container}`}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

Container.defaultProps = {
  children: null,
  className: null,
};

export default Container;
