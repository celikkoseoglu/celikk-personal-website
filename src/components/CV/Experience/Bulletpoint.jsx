import React from "react";
import PropTypes from "prop-types";

const Bulletpoint = ({ bulletPoint }) => <li>{bulletPoint}</li>;

Bulletpoint.propTypes = {
  bulletPoint: PropTypes.string,
};

Bulletpoint.defaultProps = {
  bulletPoint: null,
};

export default Bulletpoint;
