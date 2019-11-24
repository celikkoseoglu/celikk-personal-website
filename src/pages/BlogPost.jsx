import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Markdown from "markdown-to-jsx";
import Container from "react-bootstrap/Container";

import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { blogPostBackground, box } from "../stylesheets/BlogPost.module.sass";

const blogNavbar = require("../data/blogNavbar");

const BlogPost = ({ match, history }) => {
  const [post, setPost] = useState("");
  const [hasHistory, setHasHistory] = useState(false);

  useEffect(() => {
    if (history.length > 1) {
      setHasHistory(true);
    }

    window.scrollTo(0, 0);
    fetch(`/static/media/${match.params.blogPost}`)
      .then(res => res.text())
      .then(response => setPost(response))
      .catch(err => setPost(err));
  }, [match.params.blogPost, history.length]);

  return (
    <React.Fragment>
      <Container className={`col-lg-4 py-4 rounded-top ${blogPostBackground}`}>
        <div className="py-5">
          {hasHistory ? (
            <Button className={box} onClick={() => (history.goBack() ? undefined : history.goForward())}>
              {blogNavbar.goBackLabel}
            </Button>
          ) : (
            <Link to={blogNavbar.homeLink}>{blogNavbar.blogLabel}</Link>
          )}
        </div>

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
  }).isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
    goForward: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
  }).isRequired
};

export default withRouter(BlogPost);
