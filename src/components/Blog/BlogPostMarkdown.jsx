import React from "react";
import PropTypes from "prop-types";
import { compiler } from "markdown-to-jsx";
import MediaCarousel from "./MediaCarousel";
import {
  blogPostDarkStyle,
  blogPostStyle,
} from "../../stylesheets/components/Blog/BlogPostMarkdown.module.sass";
import Code from "./Code";
import BlogMetaDecorator from "../Util/BlogMetaDecorator";

const blogCache = new Map();

const retrieveCompiledBlogPostFromCache = (blogPostFileName, isDark, postContent) => {
  // don't cache react-snap SSR pass
  if (postContent === "") return null;

  const cachedItem = blogCache.get(blogPostFileName + isDark);
  if (cachedItem === undefined) {
    const cachedVar = compiler(postContent, {
      overrides: {
        BlogMetaDecorator: {
          component: BlogMetaDecorator,
        },
        MediaCarousel: {
          component: MediaCarousel,
          props: {
            isDark,
          },
        },
        Code: {
          component: Code,
          props: {
            isDark,
          },
        },
      },
    });
    blogCache.set(blogPostFileName + isDark, cachedVar);
    return cachedVar;
  }

  return cachedItem;
};

const BlogPostMarkdown = ({ isDark, content, fileName }) => (
  <div className={`${blogPostStyle} ${isDark && blogPostDarkStyle}`}>
    {retrieveCompiledBlogPostFromCache(fileName, isDark, content)}
  </div>
);

BlogPostMarkdown.propTypes = {
  content: PropTypes.string.isRequired,
  isDark: PropTypes.bool,
  fileName: PropTypes.string,
};

BlogPostMarkdown.defaultProps = {
  isDark: false,
  fileName: null,
};

export default BlogPostMarkdown;
