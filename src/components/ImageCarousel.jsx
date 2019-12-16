import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  imageCarousel,
  horizontalOverflow,
  autoSizeImage
} from "../stylesheets/components/ImageCarousel.module.sass";

const ImageCarousel = ({ folder, images }) => {
  const imageRelativeLinkArray = [];

  const [imageLoaded, setImageLoaded] = useState([]);

  useEffect(() => {
    const imageArray = images.split(",");
    imageArray.map(imageFileName =>
      import(`../data/images/blog/${folder}/${imageFileName}.webp`).then(imageLink => {
        imageRelativeLinkArray.push(imageLink.default);
        if (imageRelativeLinkArray.length === imageArray.length) {
          setImageLoaded(imageRelativeLinkArray);
        }
      })
    );
  }, []);

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
