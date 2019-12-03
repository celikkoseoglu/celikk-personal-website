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
      import(`../data/images/blog/${folder}/${imageFileName}.png`).then(imageLink => {
        imageRelativeLinkArray.push(imageLink.default);
        if (imageRelativeLinkArray.length === imageArray.length) {
          setImageLoaded(imageRelativeLinkArray);
        }
      })
    );
  }, []);

  return (
    <div align="center" className={`${horizontalOverflow} ${imageCarousel} pb-3 my-3`}>
      {imageLoaded
        ? imageLoaded.map(imageRelativeLink => (
            <img src={imageRelativeLink} className={`${autoSizeImage} mx-1`} alt="screenshot1" />
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
