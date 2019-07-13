import React from "react";
import PropTypes from "prop-types";

const TitleAndText = ({ title, text }) => {
  return (
    <div className="row text-center">
      <div className="col-md-3" />
      <div className="col-md-6">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <div className="col-md-3" />
    </div>
  );
};

TitleAndText.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
};

TitleAndText.defaultProps = {
  title: null,
  text: null
};

export default TitleAndText;
