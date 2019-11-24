import React from "react";
import PropTypes from "prop-types";

const HelloWorldBlog = ({ header }) => {
  return (
    <div>
      <h5> {header} </h5>
    </div>
  );
};

HelloWorldBlog.propTypes = {
  header: PropTypes.string
};

HelloWorldBlog.defaultProps = {
  header: null
};

export default HelloWorldBlog;
