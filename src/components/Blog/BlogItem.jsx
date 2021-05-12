import React from "react";
import PropTypes from "prop-types";
import UnstyledLink from "../Util/UnstyledLink";
import {
  blogItemLink,
  blogItemLinkDark,
} from "../../stylesheets/components/Blog/BlogItem.module.sass";
import { BLOG_LINK } from "../../utils/Constants.utils";

const BlogItem = ({ className, title, date, minutes, subtitle, blogPost, isDark }) => (
  <div className={className}>
    <UnstyledLink
      to={`${BLOG_LINK}${blogPost}`}
      className={`${blogItemLink} ${isDark && blogItemLinkDark}`}
    >
      <h4>{title}</h4>
      <h6>
        {date} - {minutes}
      </h6>
      <p>{subtitle}</p>
    </UnstyledLink>
  </div>
);

BlogItem.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  minutes: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  blogPost: PropTypes.string.isRequired,
  isDark: PropTypes.bool,
};

BlogItem.defaultProps = {
  isDark: false,
};

export default BlogItem;
