import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { noDecoration } from "../stylesheets/components/BlogItem.module.sass";

const BlogItem = ({ className, title, date, readingLength, subtitle, blogPost }) => {
  return (
    <div className={className}>
      <Link className={noDecoration} to={`/blog/${blogPost}`}>
        <h4>{title}</h4>
      </Link>
      <h6>
        {date} - {readingLength}
      </h6>
      <p>{subtitle}</p>
    </div>
  );
};

BlogItem.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  readingLength: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  blogPost: PropTypes.string.isRequired
};

export default BlogItem;
