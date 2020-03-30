import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  image,
  imageDiv,
  description,
  contentDiv,
} from "../stylesheets/components/SkillCard.module.sass";

const SkillCard = ({ imageLink, imageAlt, text }) => {
  const [relativeImageLink, setRelativeImageLink] = useState(null);
  useEffect(() => {
    import(`../${imageLink}`).then((loadedLink) => {
      setRelativeImageLink(loadedLink.default);
    });
  }, [relativeImageLink, imageLink]);

  return (
    <div className={contentDiv}>
      <div className={`${imageDiv}`}>
        {relativeImageLink && <img className={image} src={relativeImageLink} alt={imageAlt} />}
      </div>
      <p className={description}>{text}</p>
    </div>
  );
};

SkillCard.propTypes = {
  imageLink: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default SkillCard;
