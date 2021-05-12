import React from "react";
import PropTypes from "prop-types";
import { row } from "../../stylesheets/components/Util/Row.module.sass";

const Row = ({ className, children }) => <div className={`${className} ${row}`}>{children}</div>;

Row.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Row.defaultProps = {
  children: null,
  className: null,
};

export default Row;
