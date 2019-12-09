import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row } from "react-bootstrap";
import BlogItem from "../components/BlogItem";

const blog = require("../data/blog");

const Blog = () => {
  return (
    <Container className="pt-md-5 py-2">
      <div className="col-md-8 mx-auto">
        <h1 className="pb-md-5">{blog.name}</h1>
        <Row className="pb-md-5 pb-2">
          <div className="col-2 my-auto pr-0">
            <img
              className="img-fluid rounded-circle"
              src={`${blog.imageLink}`}
              alt={blog.imageAlt}
            />
          </div>
          <div className="col-10 my-auto">
            <p className="my-auto py-md-1">{blog.title}</p>
            <p className="my-auto py-md-1">{blog.subtitle}</p>
          </div>
        </Row>

        {blog.blogItems.map(blogItem => (
          <BlogItem
            className="pb-md-4"
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
  );
};

export default Blog;
