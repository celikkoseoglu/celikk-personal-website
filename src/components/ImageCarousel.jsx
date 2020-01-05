import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";
import {
  autoSizeImage,
  horizontalOverflow,
  imageCarousel,
  showHelpText
} from "../stylesheets/components/ImageCarousel.module.sass";
import { getImageLinkWithExtension } from "../utils/FileManager.utils";

const ImageCarousel = ({ folder, images }) => {
  // detect if the user is coming from an iOS device and show help text instead of scroll bar
  // because mobile safari doesn't show scroll bars
  const iOS =
    !!window.navigator.userAgent.match(/iPad/i) || !!window.navigator.userAgent.match(/iPhone/i);

  const [imageLoaded, setImageLoaded] = useState([]);

  const hasMultipleImagesAndiOS = () => {
    return (iOS && imageLoaded.length > 1);
  };
  useEffect(() => {
    const imageLinkWithExtension = imageFileName => {
      return `data/images/blog/${folder}/${getImageLinkWithExtension(imageFileName)}`;
    };
    images.split(",").map(imageFileName =>
      import(`../${imageLinkWithExtension(imageFileName)}`).then(imageLink => {
        setImageLoaded(oldArray => [...oldArray, imageLink.default]);
      })
    );
  }, [folder, images]);

  const imageSpacer = (index, length) => {
    if (index === 0) {
      return "mr-1";
    }
    if (index === length - 1) {
      return "ml-1";
    }
    return "mx-1";
  };

  return (
    <>
      <div
        align="center"
        className={`${horizontalOverflow} ${imageCarousel} ${
          hasMultipleImagesAndiOS() ? "pt-3 pb-0 mt-3 mb-1" : "py-3 my-3"
        }`}
      >
        {imageLoaded
          ? imageLoaded.map((imageRelativeLink, index) => (
              <img
                src={imageRelativeLink}
                className={`${autoSizeImage} ${imageSpacer(index, imageLoaded.length)}`}
                alt={imageRelativeLink}
                key={imageRelativeLink}
              />
            ))
          : null}
      </div>
      {hasMultipleImagesAndiOS() ? (
        <span className={`d-flex justify-content-center pb-3 ${showHelpText}`}>
          Swipe to see all images
        </span>
      ) : null}
    </>
  );
};

ImageCarousel.propTypes = {
  folder: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired
};

export default ImageCarousel;
