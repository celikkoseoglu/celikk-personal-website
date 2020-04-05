import React, { useEffect, useState } from "react";
import storage from "local-storage-fallback";
import Markdown from "markdown-to-jsx";
import { Redirect, useParams } from "react-router-dom";
import { blogPost, blogPostBackground, blogPostDark } from "../stylesheets/BlogPost.module.sass";
import MediaCarousel from "../components/MediaCarousel";
import { folders, getInitialTheme, mapFileNameToId } from "../utils/FileManager.utils";
import signatureImage from "../data/images/signature.svg";
import BlogFooter from "../components/Footer/BlogFooter";
import HorizontalRuler from "../components/Footer/HorizontalRuler";
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
    <div className={`${isDark ? blogPostDark : null} py-4 ${blogPostBackground}`}>
      <div className={blogPost}>
        <BlogNavbar
          button1Text={blogNavbar.goBackLabel}
          button1Link={blogNavbar.blogLink}
          button2Text={blogNavbar.homeLabel}
          button2Link={blogNavbar.homeLink}
          className="py-lg-5 pb-4 pt-2"
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
        <BlogFooter content={footer} signatureImage={signatureImage} isDark={isDark} />
      </div>
    </div>
  );
};

export default BlogPost;
