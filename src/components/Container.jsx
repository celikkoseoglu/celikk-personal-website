import React from "react";
import PropTypes from "prop-types";
import { paddingDefault } from "../stylesheets/components/Container.module.sass";

const Container = ({ children, backgroundColor }) => {
  return (
    <div className={`${backgroundColor} ${paddingDefault}`}>
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
