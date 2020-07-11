import React, { useEffect, useState } from "react";
import NoSSR from "react-no-ssr";
import BlogItem from "../components/Blog/BlogItem";
import Row from "../components/Util/Row";
import {
  background,
  blogDark,
  blogItemMargin,
  blogNavbarMargin,
  blogStyle,
  blogTitleFont,
  circularImage,
  footerStyle,
  noMargin,
  profilePicture,
  verticalCenter,
} from "../stylesheets/Blog.module.sass";
import { getInitialTheme } from "../utils/FileManager.utils";
import BlogFooter from "../components/Footer/BlogFooter";
import HorizontalRuler from "../components/Util/HorizontalRuler";
import BlogNavbar from "../components/Navbar/BlogNavbar";
import { firebaseAnalytics } from "../firebaseConfig";
import MetaDecorator from "../components/Util/MetaDecorator";
import metaThumbnail from "../data/images/meta/blog.png";

const blog = require("../data/blog");
const footer = require("../data/footer");
const blogNavbar = require("../data/blogNavbar");

const Blog = () => {
  window.scrollTo(0, 0);

  const [isDark, setIsDark] = useState(getInitialTheme());

  useEffect(() => {
    firebaseAnalytics.logEvent("blog_visited");
  });

  const noSSRContent = blog.blogItems.map((blogItem) => (
    <BlogItem
      className={blogItemMargin}
      title={blogItem.title}
      date={blogItem.date}
      minutes={blogItem.minutes}
      subtitle={blogItem.subtitle}
      blogPost={blogItem.blogPost}
      isDark={isDark}
      key={blogItem.title}
    />
  ));

  const content = (
    <div className={`${background} ${isDark && blogDark}`}>
      <MetaDecorator
        description={blog.pageDescription}
        title={blog.pageTitle}
        imageUrl={metaThumbnail}
        imageAlt={blog.metaImageAlt}
      />
      <div className={`${blogStyle}`}>
        <BlogNavbar
          button1Text={blog.name}
          button2Text={blogNavbar.homeLabel}
          button2Link={blogNavbar.homeLink}
          className={blogNavbarMargin}
          isDark={isDark}
          setIsDark={setIsDark}
        />
        <Row className={`${blogItemMargin} ${verticalCenter}`}>
          <div>
            <img
              className={`${circularImage} ${profilePicture}`}
              src={`${blog.imageLink}`}
              alt={blog.imageAlt}
            />
          </div>
          <div>
            <p className={`${blogTitleFont} ${noMargin}`}>{blog.title}</p>
            <p className={`${blogTitleFont} ${noMargin}`}>{blog.subtitle}</p>
          </div>
        </Row>

        {blog.blogItems.map((blogItem) => (
          <BlogItem
            className={blogItemMargin}
            title={blogItem.title}
            date={blogItem.date}
            minutes={blogItem.minutes}
            subtitle={blogItem.subtitle}
            blogPost={blogItem.blogPost}
            isDark={isDark}
            key={blogItem.title}
          />
        ))}

        <HorizontalRuler isDark={isDark} />
      </div>
      <div className={footerStyle}>
        <BlogFooter content={footer} isDark={isDark} />
      </div>
    </div>
  );

  return <NoSSR onSSR={noSSRContent}>{content}</NoSSR>;
};

export default Blog;
