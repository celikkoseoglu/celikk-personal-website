import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { isWebpSupported } from "react-image-webp/dist/utils";
import {
  autoSizeImage,
  horizontalOverflow,
  showHelpText,
  mediaCarousel,
  darkMediaCarousel,
  imageMargin,
  multipleImage,
  multipleImageIOS,
} from "../stylesheets/components/MediaCarousel.module.sass";
import { iOS } from "../utils/Constants.utils";

const mediaCarouselText = require("../data/mediaCarousel");

const IS_WEBP_SUPPORTED = isWebpSupported();
const getImageLinkWithExtension = (imageLink) => {
  if (IS_WEBP_SUPPORTED && imageLink.endsWith(".png")) {
    return `${imageLink.substring(0, imageLink.length - 4)}.webp`;
  }
  return imageLink;
};

const imageLinkWithExtension = (folder, imageFileName) => {
  return `data/images/blog/${folder}/${getImageLinkWithExtension(imageFileName)}`;
};

const MediaCarousel = ({ folder, images, isDark }) => {
  const imageFileNames = images.split(",");
  const [imageLoaded, setImageLoaded] = useState(new Array(imageFileNames.length));

  // detect if the user is coming from an iOS device and show help text instead of scroll bar
  // because mobile safari doesn't show scroll bars
  const hasMultipleImagesAndiOS = () => {
    return iOS && imageLoaded.length > 1;
  };
  useEffect(() => {
    imageFileNames.map((imageFileName, index) =>
      import(`../${imageLinkWithExtension(folder, imageFileName)}`).then((imageLink) => {
        setImageLoaded((oldArray) => {
          const prev = [...oldArray];
          prev[index] = imageLink.default;
          return prev;
        });
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [folder, images]);

  return (
    <>
      <div
        align="center"
        className={`${horizontalOverflow} ${isDark ? darkMediaCarousel : null} ${mediaCarousel} ${
          hasMultipleImagesAndiOS() ? multipleImageIOS : multipleImage
        }`}
      >
        {imageLoaded
          ? imageLoaded.map((imageRelativeLink, index) =>
              imageRelativeLink !== undefined && imageRelativeLink.endsWith(".mp4") ? (
                // eslint-disable-next-line jsx-a11y/media-has-caption
                <video
                  className={`${autoSizeImage} ${index > 0 && imageMargin}`}
                  loop
                  autoPlay
                  playsInline
                  muted
                  key={imageRelativeLink}
                >
                  <source src={imageRelativeLink} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={imageRelativeLink}
                  className={`${autoSizeImage} ${index > 0 && imageMargin}`}
                  alt={imageRelativeLink}
                  key={imageRelativeLink}
                />
              )
            )
          : null}
      </div>
      {hasMultipleImagesAndiOS() ? (
        <span className={showHelpText}>{mediaCarouselText.mediaCarouselHelpText}</span>
      ) : null}
    </>
  );
};

MediaCarousel.propTypes = {
  folder: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
  isDark: PropTypes.bool,
};

MediaCarousel.defaultProps = {
  isDark: false,
};

export default MediaCarousel;
