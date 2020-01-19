import React from "react";
import PropTypes from "prop-types";
import { signature, darkSignature } from "../stylesheets/components/Signature.module.sass";

const Signature = ({ signatureImage, isDark, className }) => {
  return (
    <img
      src={signatureImage}
      alt="signature"
      className={`img-responsive img-centered ${signature} ${
        isDark ? darkSignature : null
      } ${className}`}
    />
  );
};

Signature.propTypes = {
  signatureImage: PropTypes.string.isRequired,
  isDark: PropTypes.bool,
  className: PropTypes.string
};

Signature.defaultProps = {
  isDark: null,
  className: null
};

export default Signature;
