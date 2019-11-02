import React, { useEffect, useState } from "react";
import "../index.sass";
import "bootstrap/dist/css/bootstrap.css";
import Markdown from "markdown-to-jsx";
import Container from "react-bootstrap/Container";

import {
  blogPostImage,
  blogPostBackground
} from "../stylesheets/BlogPost.module.sass";

const fooBlog = require("../blog/foo.md");

const BlogPost = () => {
  const [post, setPost] = useState("");

  useEffect(() => {
    fetch(fooBlog)
      .then(res => res.text())
      .then(response => setPost(response))
      .catch(err => setPost(err));
  });

  return (
    <React.Fragment>
      <div className={blogPostImage} />
      <Container className={blogPostBackground}>
        <Markdown>{post}</Markdown>
      </Container>
    </React.Fragment>
  );
};

export default BlogPost;
