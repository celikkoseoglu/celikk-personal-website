import React from "react";
import PropTypes from "prop-types";

const Skill = ({ header, content }) => {
  return (
    <div>
      <h5> {header} </h5>
      <p> {content} </p>
    </div>
  );
};

Skill.propTypes = {
  header: PropTypes.string,
  content: PropTypes.string
};

Skill.defaultProps = {
  header: null,
  content: null
};

export default Skill;
