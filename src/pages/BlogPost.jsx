import React, { useEffect, useState } from "react";
import "../index.sass";
import "bootstrap/dist/css/bootstrap.css";
import Markdown from "markdown-to-jsx";
import Container from "react-bootstrap/Container";

import PropTypes from "prop-types";
import {
  blogPostImage,
  blogPostBackground
} from "../stylesheets/BlogPost.module.sass";

const BlogPost = ({ match }) => {
  const [post, setPost] = useState("");

  useEffect(() => {
    fetch(`/static/media/${match.params.blogPost}`)
      .then(res => res.text())
      .then(response => setPost(response))
      .catch(err => setPost(err));
  }, [match.params.blogPost]);

  return (
    <React.Fragment>
      <div className={blogPostImage} />
      <Container className={blogPostBackground}>
        <Markdown>{post}</Markdown>
      </Container>
    </React.Fragment>
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
