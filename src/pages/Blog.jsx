import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import storage from "local-storage-fallback";
import BlogItem from "../components/BlogItem";
import {
  profilePicture,
  background,
  blogTitleFont,
  blogDark,
  blogStyle,
  marginVerticalAuto,
  circularImage,
} from "../stylesheets/Blog.module.sass";
import { getInitialTheme } from "../utils/FileManager.utils";
import BlogFooter from "../components/Footer/BlogFooter";
import HorizontalRuler from "../components/Util/HorizontalRuler";
import BlogNavbar from "../components/Navbar/BlogNavbar";

const blog = require("../data/blog");
const footer = require("../data/footer");
const blogNavbar = require("../data/blogNavbar");

const Blog = () => {
  window.scrollTo(0, 0);

  const [isDark, setIsDark] = useState(getInitialTheme());

  useEffect(() => {
    storage.setItem("theme", isDark.toString());
  }, [isDark]);

  return (
    <div className={`${background} ${isDark ? blogDark : null}`}>
      <div className={`pt-md-5 py-4 ${blogStyle}`}>
        <BlogNavbar
          button1Text={blog.name}
          button2Text={blogNavbar.homeLabel}
          button2Link={blogNavbar.homeLink}
          className="pb-md-5 pt-md-4 pt-2 pb-4"
          isDark={isDark}
          setIsDark={setIsDark}
        />
        <Row className="pb-md-5 pb-4 col-12 pr-0">
          <div className={marginVerticalAuto}>
            <img
              className={`${circularImage} ${profilePicture}`}
              src={`${blog.imageLink}`}
              alt={blog.imageAlt}
            />
          </div>
          <div>
            <p className={`${marginVerticalAuto} py-md-1 ${blogTitleFont}`}>{blog.title}</p>
            <p className={`${marginVerticalAuto} py-md-1 ${blogTitleFont}`}>{blog.subtitle}</p>
          </div>
        </Row>

        {blog.blogItems.map((blogItem) => (
          <BlogItem
            className="pb-md-4 pb-3"
            title={blogItem.title}
            date={blogItem.date}
            minutes={blogItem.minutes}
            subtitle={blogItem.subtitle}
            blogPost={blogItem.blogPost}
            key={blogItem.title}
          />
        ))}
        <HorizontalRuler isDark={isDark} />
        <BlogFooter content={footer} isDark={isDark} />
      </div>
    </div>
  );
};

export default Blog;
