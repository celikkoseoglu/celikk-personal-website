import React, { useEffect, useState } from "react";
import NoSSR from "react-no-ssr";
import { Redirect, useParams } from "react-router-dom";
import {
  blogContainer,
  blogPostDark,
  blogPostBody,
  blogPostNavbarMargin,
  footerStyle,
  width,
} from "../stylesheets/BlogPost.module.sass";
import { getInitialTheme } from "../utils/FileManager.utils";
import BlogFooter from "../components/Footer/BlogFooter";
import HorizontalRuler from "../components/Util/HorizontalRuler";
import LoadingIndicator from "../components/Util/LoadingIndicator";
import BlogNavbar from "../components/Navbar/BlogNavbar";
import { firebaseAnalytics } from "../firebaseConfig";
import BlogPostMarkdown from "../components/Blog/BlogPostMarkdown";
import GrowingCircleAnimation from "../components/Animations/GrowingCircleAnimation";

const blogNavbar = require("../data/blogNavbar");
const footer = require("../data/footer");

const BlogPost = () => {
  const [post, setPost] = useState("");
  const [isDark, setIsDark] = useState(getInitialTheme());

  const { blogPostFileName } = useParams();

  let redirect = false;

  let hashedBlogFileLink;
  try {
    // eslint-disable-next-line global-require,import/no-dynamic-require
    hashedBlogFileLink = require(`../blog/${blogPostFileName}.md`);
    // eslint-disable-next-line global-require,import/no-dynamic-require
  } catch {
    redirect = true;
  }

  useEffect(() => {
    if (!redirect) {
      firebaseAnalytics.logEvent(`${blogPostFileName}_visited`);

      fetch(hashedBlogFileLink)
        .then((res) => res.text())
        .then((response) => setPost(response))
        .catch((err) => setPost(err));
    } else {
      firebaseAnalytics.logEvent(`redirected_to_404_${blogPostFileName}`);
    }
  }, [hashedBlogFileLink, redirect, blogPostFileName]);

  if (redirect) {
    return <Redirect to="/404" />;
  }

  const noSSRContent = (
    <BlogPostMarkdown content={post} isDark={isDark} />
  );

  const content = (
    <div className={`${isDark && blogPostDark} ${blogPostBody}`}>
      <GrowingCircleAnimation isDark={isDark} />
      <div className={width}>
        <div className={`${blogContainer}`}>
          <BlogNavbar
            headerText={blogNavbar.blogBranding}
            headerLink={blogNavbar.blogLink}
            brandingLink={blogNavbar.homeLink}
            className={blogPostNavbarMargin}
            isDark={isDark}
            setIsDark={setIsDark}
          />

          {post === "" ? (
            <LoadingIndicator isDark={isDark} />
          ) : (
            <BlogPostMarkdown content={post} isDark={isDark} fileName={blogPostFileName} />
          )}

          <HorizontalRuler isDark={isDark} />
        </div>
        <div className={footerStyle}>
          <BlogFooter content={footer} isDark={isDark} />
        </div>
      </div>
    </div>
  );

  return <NoSSR onSSR={noSSRContent}>{content}</NoSSR>;
};

export default BlogPost;
