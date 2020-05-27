import React from "react";
import PropTypes from "prop-types";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark, prism } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Markdown from "markdown-to-jsx";
import MediaCarousel from "../MediaCarousel";
import {
  blogPostStyle,
  blogPostDarkStyle,
} from "../../stylesheets/components/Blog/BlogPostMarkdown.module.sass";

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
          SyntaxHighlighter: {
            component: SyntaxHighlighter,
            props: {
              style: isDark ? atomDark : prism,
            },
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
