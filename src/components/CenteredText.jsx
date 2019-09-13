import React from "react";
import PropTypes from "prop-types";

const CenteredText = ({ text }) => {
  return (
    <div className="row text-center">
      <div className="col-md-6 offset-3">
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
