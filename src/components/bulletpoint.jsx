import React from "react";
import PropTypes from "prop-types";

const BulletPoint = ({ bulletPoint }) => {
  return <li>{bulletPoint}</li>;
};

BulletPoint.propTypes = {
  bulletPoint: PropTypes.string
};

BulletPoint.defaultProps = {
  bulletPoint: null
};

export default BulletPoint;
