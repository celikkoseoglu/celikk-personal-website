import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import storage from "local-storage-fallback";
import BlogItem from "../components/BlogItem";

import {
  profilePicture,
  background,
  blogTitleFont,
  blogDark,
  socialMediaButtonBackground,
  socialMediaButtonBackgroundDark
} from "../stylesheets/Blog.module.sass";
import signatureImage from "../data/images/signature.svg";
import SocialMediaBar from "../components/Footer/SocialMediaBar";
import { getInitialTheme } from "../utils/FileManager.utils";
import DarkModeToggle from "../components/DarkModeToggle";
import Signature from "../components/Signature";

const blog = require("../data/blog");
const footer = require("../data/footer");

const Blog = () => {
  window.scrollTo(0, 0);

  const [isDark, setIsDark] = useState(getInitialTheme());

  useEffect(() => {
    storage.setItem("theme", isDark.toString());
  }, [isDark]);

  return (
    <div className={`${background} ${isDark ? blogDark : null}`}>
      <Container className="pt-md-5 py-4">
        <div className="col-md-8 mx-auto px-0">
          <div className="d-flex justify-content-between">
            <h1 className="pb-md-5 my-0 py-4 pt-md-0">{blog.name}</h1>
            <DarkModeToggle onClickMethod={setIsDark} isDark={isDark} />
          </div>
          <Row className="pb-md-5 pb-5 col-12 pr-0">
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

          {blog.blogItems.map(blogItem => (
            <BlogItem
              className="pb-md-4 pb-3"
              title={blogItem.title}
              date={blogItem.date}
              readingLength={blogItem.readingLength}
              subtitle={blogItem.subtitle}
              blogPost={blogItem.blogPost}
              key={blogItem.title}
            />
          ))}

          <hr />
          <Row className="text-center">
            <div className="col-md-4 pb-md-0 pb-3">
              <span>{footer.title}</span>
              <Signature signatureImage={signatureImage} isDark={isDark} />
            </div>
            <div className="col-md-8 my-auto px-0">
              <SocialMediaBar
                socialMediaLinks={footer.socialMediaLinks}
                buttonBackground={
                  isDark ? socialMediaButtonBackgroundDark : socialMediaButtonBackground
                }
              />
            </div>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
