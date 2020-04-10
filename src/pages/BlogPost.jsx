import React, { useEffect, useState } from "react";
import storage from "local-storage-fallback";
import Markdown from "markdown-to-jsx";
import { Redirect, useParams } from "react-router-dom";
import {
  blogPost,
  blogPostBackground,
  blogPostDark,
  blogPostMargins,
  blogPostNavbarMargin,
  footerStyle,
} from "../stylesheets/BlogPost.module.sass";
import MediaCarousel from "../components/MediaCarousel";
import { folders, getInitialTheme, mapFileNameToId } from "../utils/FileManager.utils";
import BlogFooter from "../components/Footer/BlogFooter";
import HorizontalRuler from "../components/Util/HorizontalRuler";
import LoadingIndicator from "../components/Util/LoadingIndicator";
import BlogNavbar from "../components/Navbar/BlogNavbar";

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
    if (!redirect) {
      window.scrollTo(0, 0);
      storage.setItem("theme", isDark.toString());

      fetch(`/static/media/${hashedBlogFileLink}`)
        .then((res) => res.text())
        .then((response) => setPost(response))
        .catch((err) => setPost(err));
    }
  }, [isDark, hashedBlogFileLink, redirect]);

  return redirect ? (
    <Redirect to="/404" />
  ) : (
    <div className={`${isDark ? blogPostDark : null} ${blogPostMargins} ${blogPostBackground}`}>
      <div>
        <div className={blogPost}>
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
