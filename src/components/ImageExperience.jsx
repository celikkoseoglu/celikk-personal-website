import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { mobileSize } from "../stylesheets/components/ImageExperience.module.sass";
import { getImageLinkWithExtension } from "../utils/FileManager.utils";

const ImageExperience = ({ rightAlign, imageLink, imageAlt, title, subtitle, text, className }) => {
  const [relativeImageLink, setRelativeImageLink] = useState(null);
  useEffect(() => {
    const imageLinkWithExtension = getImageLinkWithExtension(imageLink);
    import(`../${imageLinkWithExtension}`).then(loadedLink => {
      setRelativeImageLink(loadedLink.default);
    });
  }, [relativeImageLink, imageLink]);

  return (
    <div
      className={`mx-auto row ${mobileSize} ${className} ${
        rightAlign ? "flex-column-reverse flex-md-row" : ""
      }`}
    >
      <div className={`col-md-4 align-self-center ${rightAlign ? "order-2" : ""}`}>
        {relativeImageLink ? (
          <img className="col-md-12" src={relativeImageLink} alt={imageAlt} />
        ) : null}
      </div>
      <div className="col-md-8 align-self-center py-4">
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{text}</p>
      </div>
    </div>
  );
};

ImageExperience.propTypes = {
  rightAlign: PropTypes.bool,
  imageLink: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string
};

ImageExperience.defaultProps = {
  rightAlign: false,
  className: null
};

export default ImageExperience;
