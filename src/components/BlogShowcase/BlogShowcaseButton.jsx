import React from "react";
import PropTypes from "prop-types";
import {
  square,
  montserrat,
  textColor,
  shadowMargin,
} from "../../stylesheets/components/BlogShowcase/BlogShowcaseButton.module.sass";
import UnstyledLink from "../Util/UnstyledLink";

const BlogShowcaseButton = ({ link, text, className }) => (
  <div className={shadowMargin}>
    <UnstyledLink to={link}>
      <p className={`${className} ${montserrat} ${square} ${textColor}`}>{text}</p>
    </UnstyledLink>
  </div>
);

BlogShowcaseButton.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

BlogShowcaseButton.defaultProps = {
  className: null,
};

export default BlogShowcaseButton;
