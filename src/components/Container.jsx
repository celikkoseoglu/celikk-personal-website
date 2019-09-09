import React from "react";
import PropTypes from "prop-types";
import { paddingDefault } from "../stylesheets/components/Container.module.sass";
import Heading from "./Heading";

const Container = ({ title, children, backgroundColor }) => {
  return (
    <div className={`${backgroundColor} ${paddingDefault}`}>
      <Heading text={title} />
      <div className="container">
        <div className="row">{children}</div>
      </div>
    </div>
  );
};

Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string
};

Container.defaultProps = {
  title: PropTypes.null,
  backgroundColor: PropTypes.null
};

export default Container;
