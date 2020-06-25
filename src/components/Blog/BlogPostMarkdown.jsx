import React from "react";
import PropTypes from "prop-types";
import Markdown from "markdown-to-jsx";
import MediaCarousel from "./MediaCarousel";
import {
  blogPostDarkStyle,
  blogPostStyle,
} from "../../stylesheets/components/Blog/BlogPostMarkdown.module.sass";
import BlogMetaDecorator from "../Util/BlogMetaDecorator";
import Code from "./Code";

const BlogPostMarkdown = ({ isDark, content }) => {
  return (
    <Markdown
      className={`${blogPostStyle} ${isDark && blogPostDarkStyle}`}
      options={{
        overrides: {
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
          BlogMetaDecorator: {
            component: BlogMetaDecorator,
          },
        },
      }}
    >
      {content}
    </Markdown>
  );
};

BlogPostMarkdown.propTypes = {
  content: PropTypes.string.isRequired,
  isDark: PropTypes.bool,
};

BlogPostMarkdown.defaultProps = {
  isDark: false,
};

export default BlogPostMarkdown;
