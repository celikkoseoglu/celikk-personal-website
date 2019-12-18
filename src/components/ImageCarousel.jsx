import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";
import {
  autoSizeImage,
  horizontalOverflow,
  imageCarousel
} from "../stylesheets/components/ImageCarousel.module.sass";
import { getImageLinkWithExtension } from "../utils/FileManager.utils";

const ImageCarousel = ({ folder, images }) => {
  const [imageLoaded, setImageLoaded] = useState([]);
  useEffect(() => {
    const imageLinkWithExtension = imageFileName => {
      return getImageLinkWithExtension(imageFileName);
    };
    images.split(",").map(imageFileName =>
      import(`../data/images/blog/${folder}/${imageLinkWithExtension(imageFileName)}`).then(
        imageLink => {
          setImageLoaded(oldArray => [...oldArray, imageLink.default]);
        }
      )
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
    <div align="center" className={`${horizontalOverflow} ${imageCarousel} py-3 my-3`}>
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
  );
};

ImageCarousel.propTypes = {
  folder: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired
};

export default ImageCarousel;
