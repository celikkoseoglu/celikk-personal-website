import React from "react";
import PropTypes from "prop-types";
import {
  square,
  montserrat,
  timestampStyle,
  titleStyle,
  description
} from "../../stylesheets/components/BlogShowcase/BlogShowcaseCard.module.sass";
import UnstyledLink from "../Util/UnstyledLink";
import { BLOG_LINK } from "../../utils/Constants.utils";
import SpringDiv from "../Animations/SpringDiv";

const BlogShowcaseCard = ({ title, subtitle, timestamp, minutes, blogPost, className }) => {
  return (
    <SpringDiv className={`${square} ${className}`}>
      <UnstyledLink to={`${BLOG_LINK}${blogPost}`}>
        <div className={description}>
          <h6 className={`${montserrat} ${titleStyle} pb-1`}>{title}</h6>
          <p>{subtitle}</p>
        </div>
        <p className={`${timestampStyle} ${montserrat}`}>
          {timestamp} - {minutes} read
        </p>
      </UnstyledLink>
    </SpringDiv>
  );
};

BlogShowcaseCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  minutes: PropTypes.string.isRequired,
  blogPost: PropTypes.string.isRequired,
  className: PropTypes.string
};

BlogShowcaseCard.defaultProps = {
  className: null
};

export default BlogShowcaseCard;
