import React from "react";
import PropTypes from "prop-types";
import {
  sectionPadding,
  sectionBackground,
} from "../../stylesheets/components/Utils/Section.module.sass";

const Section = ({ id, className, children }) => {
  return (
    <section id={id} className={`${sectionBackground} ${sectionPadding} ${className}`}>
      {children}
    </section>
  );
};

Section.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Section.defaultProps = {
  className: null,
};

export default Section;
