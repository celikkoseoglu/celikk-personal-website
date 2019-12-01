import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { horizontalOverflow, flex } from "../stylesheets/components/ImageCarousel.module.sass";

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
    <div className={`${horizontalOverflow} ${flex}`}>
      {imageLoaded
        ? imageLoaded.map(imageRelativeLink => (
            <img src={imageRelativeLink} alt="screenshot1" height="400" />
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
