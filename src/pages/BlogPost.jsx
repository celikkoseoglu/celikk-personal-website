import React, {useEffect, useState} from "react";
import storage from "local-storage-fallback";
import Markdown from "markdown-to-jsx";
import PropTypes from "prop-types";
import {blogPost, blogPostBackground, blogPostDark} from "../stylesheets/BlogPost.module.sass";
import MediaCarousel from "../components/MediaCarousel";
import {folders, getInitialTheme, mapFileNameToId} from "../utils/FileManager.utils";

import signatureImage from "../data/images/signature.svg";
import DarkModeToggle from "../components/DarkModeToggle";
import BlogFooter from "../components/Footer/BlogFooter";
import HorizontalRuler from "../components/Footer/HorizontalRuler";
import CustomButton from "../components/CustomButton";
import LoadingIndicator from "../components/Util/LoadingIndicator";

const blogNavbar = require("../data/blogNavbar");
const footer = require("../data/footer");

const BlogPost = ({ match }) => {
  const [post, setPost] = useState("");
  const [isDark, setIsDark] = useState(getInitialTheme());

  useEffect(() => {
    window.scrollTo(0, 0);

    storage.setItem("theme", isDark.toString());

    fetch(`/static/media/${mapFileNameToId(match.params.blogPost, folders.blogFiles)}`)
      .then(res => res.text())
      .then(response => setPost(response))
      .catch(err => setPost(err));
  }, [match.params.blogPost, isDark]);

  return (
    <div className={`${isDark ? blogPostDark : null} py-4 ${blogPostBackground}`}>
      <div className={blogPost}>
        <div className="py-lg-5 pb-4 pt-2 d-flex justify-content-between">
          <CustomButton isDark={isDark} text={blogNavbar.goBackLabel} to={blogNavbar.blogLink} />
          <DarkModeToggle onClickMethod={setIsDark} isDark={isDark} setIsDark={setIsDark} />
          <CustomButton isDark={isDark} text={blogNavbar.homeLabel} to={blogNavbar.homeLink} />
        </div>

        {post === "" ? (
          <LoadingIndicator isDark={isDark} />
        ) : (
          <Markdown
            options={{
              overrides: {
                MediaCarousel: {
                  component: MediaCarousel,
                  props: {
                    isDark
                  }
                }
              }
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

BlogPost.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      blogPost: PropTypes.string.isRequired
    })
  }).isRequired
};

export default BlogPost;
