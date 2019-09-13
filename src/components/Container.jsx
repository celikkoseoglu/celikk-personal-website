import React from "react";
import PropTypes from "prop-types";

const Container = ({ children, backgroundColor }) => {
  return (
    <div className={`${backgroundColor}`}>
      <div className="container">
        <div className="row">{children}</div>
      </div>
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string
};

Container.defaultProps = {
  backgroundColor: PropTypes.null
};

export default Container;
