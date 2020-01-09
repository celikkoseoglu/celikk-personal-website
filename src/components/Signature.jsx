import React from "react";
import PropTypes from "prop-types";
import { signature, darkSignature } from "../stylesheets/components/Signature.module.sass";

const Signature = ({ signatureImage, isDark }) => {
  return (
    <img
      src={signatureImage}
      alt="signature"
      className={`img-responsive img-centered ${signature} ${isDark ? darkSignature : null}`}
    />
  );
};

Signature.propTypes = {
  signatureImage: PropTypes.string.isRequired,
  isDark: PropTypes.bool
};

Signature.defaultProps = {
  isDark: null
};

export default Signature;
