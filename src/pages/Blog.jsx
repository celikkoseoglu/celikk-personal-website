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
} from "../stylesheets/Blog.module.sass";
import { getInitialTheme } from "../utils/FileManager.utils";
import DarkModeToggle from "../components/DarkModeToggle";
import BlogFooter from "../components/Footer/BlogFooter";
import HorizontalRuler from "../components/Footer/HorizontalRuler";
import CustomButton from "../components/CustomButton";

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
        <div className="d-flex justify-content-between pb-md-5 pt-md-4 pt-2 pb-4">
          <h1 className="my-auto">{blog.name}</h1>
          <DarkModeToggle onClickMethod={setIsDark} isDark={isDark} />
          <CustomButton isDark={isDark} text={blogNavbar.homeLabel} to={blogNavbar.homeLink} />
        </div>
        <Row className="pb-md-5 pb-4 col-12 pr-0">
          <div className="my-auto">
            <img
              className={`img-fluid rounded-circle ${profilePicture}`}
              src={`${blog.imageLink}`}
              alt={blog.imageAlt}
            />
          </div>
          <div className="my-auto">
            <p className={`my-auto py-md-1 ${blogTitleFont}`}>{blog.title}</p>
            <p className={`my-auto py-md-1 ${blogTitleFont}`}>{blog.subtitle}</p>
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
