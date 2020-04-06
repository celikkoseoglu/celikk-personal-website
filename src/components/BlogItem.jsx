import React from "react";
import PropTypes from "prop-types";
import UnstyledLink from "./Util/UnstyledLink";
import { blogTitle, blogSubtitle } from "../stylesheets/components/BlogItem.module.sass";
import { BLOG_LINK } from "../utils/Constants.utils";

const BlogItem = ({ className, title, date, minutes, subtitle, blogPost }) => {
  return (
    <div className={className}>
      <UnstyledLink to={`${BLOG_LINK}${blogPost}`} className={`${blogTitle} ${blogSubtitle}`}>
        <h4>{title}</h4>
        <h6>
          {date} - {minutes}
        </h6>
      </UnstyledLink>
      <p>{subtitle}</p>
    </div>
  );
};

BlogItem.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  minutes: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  blogPost: PropTypes.string.isRequired,
};

export default BlogItem;
