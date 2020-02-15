import React from "react";
import PropTypes from "prop-types";
import { square, montserrat, timestampStyle } from "../stylesheets/components/BlogShowcaseCard.module.sass";
import UnstyledLink from "./Util/UnstyledLink";
import { BLOG_LINK } from "../utils/Constants.utils";

const BlogShowcaseCard = ({ title, subtitle, timestamp, minutes, blogPost }) => {
  return (
    <UnstyledLink to={`${BLOG_LINK}${blogPost}`} className={square}>
      <h6 className={montserrat}>{title}</h6>
      <p>{subtitle}</p>
      <p className={`${timestampStyle} align-bottom`}>
        {timestamp} - {minutes} read
      </p>
    </UnstyledLink>
  );
};

BlogShowcaseCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  minutes: PropTypes.string.isRequired,
  blogPost: PropTypes.string.isRequired
};

export default BlogShowcaseCard;
