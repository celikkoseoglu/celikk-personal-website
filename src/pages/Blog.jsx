import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row } from "react-bootstrap";

const blog = require("../data/blog");

const Blog = () => {
  return (
    <Container className="pt-md-5 py-2">
      <h1 className="pb-md-5">{blog.name}</h1>
      <Row>
        <div className="col-sm-2">
          <img className="img-fluid rounded-circle" src={`${blog.imageLink}`} alt={blog.imageAlt} />
        </div>
        <div className="my-auto">
          <h5>{blog.title}</h5>
          <h5>{blog.subtitle}</h5>
        </div>
      </Row>
    </Container>
  );
};

export default Blog;
