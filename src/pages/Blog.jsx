import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row } from "react-bootstrap";
import BlogItem from "../components/BlogItem";

import { profilePicture, background, blogTitleFont } from "../stylesheets/Blog.module.sass";

const blog = require("../data/blog");

const Blog = () => {
  return (
    <body className={background}>
      <Container className="pt-md-5 py-2">
        <div className="col-md-8 mx-auto">
          <h1 className="pb-md-5 py-4 pt-md-0">{blog.name}</h1>
          <Row className="pb-md-5 pb-5 col-12">
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
        </div>
      </Container>
    </body>
  );
};

export default Blog;
