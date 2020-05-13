import React, { useEffect, useState } from "react";
import Markdown from "markdown-to-jsx";
import { Redirect, useParams } from "react-router-dom";
import {
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
        <div className={`${blogPostStyle} ${isDark && blogPostDarkStyle}`}>
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
              options={{
                overrides: {
                  MediaCarousel: {
                    component: MediaCarousel,
                    props: {
                      isDark,
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
