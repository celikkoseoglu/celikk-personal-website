import React from "react";
import PropTypes from "prop-types";

const CenteredText = ({ text }) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="col-md-6 text-center">
        <p>{text}</p>
      </div>
    </div>
  );
};

CenteredText.propTypes = {
  text: PropTypes.string
};

CenteredText.defaultProps = {
  text: null
};

export default CenteredText;
