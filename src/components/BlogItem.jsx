import React from "react";
import PropTypes from "prop-types";
import UnstyledLink from "./Util/UnstyledLink";
import { blogTitle, blogSubtitle } from "../stylesheets/components/BlogItem.module.sass";

const BlogItem = ({ className, title, date, readingLength, subtitle, blogPost }) => {
  return (
    <div className={className}>
      <UnstyledLink to={`/blog/${blogPost}`} className={`${blogTitle} ${blogSubtitle}`}>
        <h4>{title}</h4>
        <h6>
          {date} - {readingLength}
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
  readingLength: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  blogPost: PropTypes.string.isRequired
};

export default BlogItem;
