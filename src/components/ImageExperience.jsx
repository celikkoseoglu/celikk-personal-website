import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { isWebpSupported } from "react-image-webp/dist/utils";
import { mobileSize } from "../stylesheets/components/ImageExperience.module.sass";

const IS_WEBP_SUPPORTED = isWebpSupported();
const getImageLinkWithExtension = imageLink => {
  if (IS_WEBP_SUPPORTED && imageLink.endsWith(".png")) {
    return `${imageLink.substring(0, imageLink.length - 4)}.webp`;
  }
  return imageLink;
};

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
