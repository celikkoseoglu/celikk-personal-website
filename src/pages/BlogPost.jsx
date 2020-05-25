import React, { useEffect, useState } from "react";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark, prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash";

import Markdown from "markdown-to-jsx";
import { Redirect, useParams } from "react-router-dom";
import {
  blogContainer,
  blogPostStyle,
  blogPostDarkStyle,
  blogPostBackground,
  blogPostDark,
  blogPostMargins,
  blogPostNavbarMargin,
  footerStyle,
  width,
} from "../stylesheets/BlogPost.module.sass";
import MediaCarousel from "../components/MediaCarousel";
import { folders, getInitialTheme, mapFileNameToId } from "../utils/FileManager.utils";
import BlogFooter from "../components/Footer/BlogFooter";
import HorizontalRuler from "../components/Util/HorizontalRuler";
import LoadingIndicator from "../components/Util/LoadingIndicator";
import BlogNavbar from "../components/Navbar/BlogNavbar";
import { firebaseAnalytics } from "../firebaseConfig";

const blogNavbar = require("../data/blogNavbar");
const footer = require("../data/footer");

SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("bash", bash);

const BlogPost = () => {
  const [post, setPost] = useState("");
  const [isDark, setIsDark] = useState(getInitialTheme());

  const { blogPostFileName } = useParams();

  let redirect = false;

  let hashedBlogFileLink;
  try {
    hashedBlogFileLink = mapFileNameToId(blogPostFileName, folders.blogFiles);
  } catch {
    redirect = true;
  }

  useEffect(() => {
    document.title = `${footer.title} - ${blogPostFileName}`;
    if (!redirect) {
      firebaseAnalytics.logEvent(`${blogPostFileName}_visited`);

      window.scrollTo(0, 0);

      fetch(`/static/media/${hashedBlogFileLink}`)
        .then((res) => res.text())
        .then((response) => setPost(response))
        .catch((err) => setPost(err));
    } else {
      firebaseAnalytics.logEvent(`redirected_to_404_${blogPostFileName}`);
    }
  }, [hashedBlogFileLink, redirect, blogPostFileName]);

  return redirect ? (
    <Redirect to="/404" />
  ) : (
    <div className={`${isDark ? blogPostDark : null} ${blogPostMargins} ${blogPostBackground}`}>
      <div className={width}>
        <div className={`${blogContainer}`}>
          <BlogNavbar
            button1Text={blogNavbar.goBackLabel}
            button1Link={blogNavbar.blogLink}
            button2Text={blogNavbar.homeLabel}
            button2Link={blogNavbar.homeLink}
            className={blogPostNavbarMargin}
            isDark={isDark}
            setIsDark={setIsDark}
          />

          {post === "" ? (
            <LoadingIndicator isDark={isDark} />
          ) : (
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
              {post}
            </Markdown>
          )}

          <HorizontalRuler isDark={isDark} />
        </div>
        <div className={footerStyle}>
          <BlogFooter content={footer} isDark={isDark} />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
