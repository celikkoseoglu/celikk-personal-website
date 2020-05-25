import React from "react";
import PropTypes from "prop-types";
import {
  title,
  ruler,
  titleRow,
} from "../stylesheets/components/Heading.module.sass";
import Row from "./Util/Row";
import HorizontalRuler from "./Util/HorizontalRuler";

const Heading = ({ text, className }) => {
  return (
    <Row className={`${titleRow}`}>
      <h2 className={`${title} ${className}`}>{text}</h2>
      <HorizontalRuler isThick className={ruler} />
    </Row>
  );
};

Heading.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};

Heading.defaultProps = {
  text: null,
  className: null,
};

export default Heading;
