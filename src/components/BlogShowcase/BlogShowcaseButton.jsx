import React from "react";
import PropTypes from "prop-types";
import {
  square,
  montserrat,
  textColor
} from "../../stylesheets/components/BlogShowcase/BlogShowcaseButton.module.sass";
import UnstyledLink from "../Util/UnstyledLink";

const BlogShowcaseButton = ({ link, text, className }) => {
  return (
    <UnstyledLink
      to={link}
      className={`${className} ${montserrat} ${square} ${textColor}
                  d-flex justify-content-center align-items-center`}
    >
      {text}
    </UnstyledLink>
  );
};

BlogShowcaseButton.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string
};

BlogShowcaseButton.defaultProps = {
  className: null
};

export default BlogShowcaseButton;
