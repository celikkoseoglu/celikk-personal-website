import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Markdown from "markdown-to-jsx";
import Container from "react-bootstrap/Container";

import PropTypes from "prop-types";
import { blogPostImage, blogPostBackground } from "../stylesheets/BlogPost.module.sass";
import { footerBackground, footerPadding } from "../stylesheets/Home.module.sass";
import Footer from "../components/Footer/Footer";
import BlogNavigationBar from "../components/Navbar/BlogNavigationBar";

const blogNavbar = require("../data/blogNavbar");

const BlogPost = ({ match }) => {
  const [post, setPost] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`/static/media/${match.params.blogPost}`)
      .then(res => res.text())
      .then(response => setPost(response))
      .catch(err => setPost(err));
  }, [match.params.blogPost]);

  return (
    <React.Fragment>
      <BlogNavigationBar content={blogNavbar} />

      <div className={blogPostImage} />
      <Container className={`p-4 rounded-top ${blogPostBackground}`}>
        <Markdown>{post}</Markdown>
      </Container>

      <div className={`${footerBackground} ${footerPadding}`}>
        <Container>
          <Footer />
        </Container>
      </div>
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
