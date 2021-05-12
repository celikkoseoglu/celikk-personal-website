import React from "react";
import PropTypes from "prop-types";
import { container, padding } from "../../stylesheets/components/Util/Container.module.sass";

const Container = ({ className, children, noPadding }) => (
  <div className={`${className} ${container} ${!noPadding && padding}`}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  noPadding: PropTypes.bool,
};

Container.defaultProps = {
  children: null,
  className: null,
  noPadding: false,
};

export default Container;
