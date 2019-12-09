import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Markdown from "markdown-to-jsx";
import Container from "react-bootstrap/Container";

import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {
  blogPost,
  blogPostBackground,
  box,
  socialMediaButtonBackground
} from "../stylesheets/BlogPost.module.sass";
import ImageCarousel from "../components/ImageCarousel";
import { folders, mapFileNameToId } from "../utils/FileManager.utils";
import SocialMediaBar from "../components/Footer/SocialMediaBar";

import Signature from "../data/images/signature.svg";
import { signature } from "../stylesheets/components/Footer.module.sass";

const blogNavbar = require("../data/blogNavbar");
const footer = require("../data/footer");

const BlogPost = ({ match, history }) => {
  const [post, setPost] = useState("");
  const [hasHistory, setHasHistory] = useState(false);

  useEffect(() => {
    if (history.length > 1) {
      setHasHistory(true);
    }

    window.scrollTo(0, 0);
    fetch(`/static/media/${mapFileNameToId(match.params.blogPost, folders.blogFiles)}`)
      .then(res => res.text())
      .then(response => setPost(response))
      .catch(err => setPost(err));
  }, [match.params.blogPost, history.length]);

  return (
    <>
      <Container
        className={`col-xl-4 col-lg-6 col-md-8 py-4 rounded-top ${blogPostBackground} ${blogPost}`}
      >
        <div className="py-lg-5 py-4">
          {hasHistory ? (
            <Button
              className={box}
              onClick={() => (history.goBack() ? undefined : history.goForward())}
            >
              {blogNavbar.goBackLabel}
            </Button>
          ) : (
            <Link to={blogNavbar.homeLink}>{blogNavbar.blogLabel}</Link>
          )}
        </div>

        <Markdown
          options={{
            overrides: {
              ImageCarousel: {
                component: ImageCarousel
              }
            }
          }}
        >
          {post}
        </Markdown>
        <hr />
        <Row className="text-center">
          <div className="col-md-4 pb-md-0 pb-3">
            <span>{footer.title}</span>
            <br />
            <img
              src={Signature}
              alt="signature"
              className={`img-responsive img-centered ${signature}`}
            />
          </div>
          <div className="col-md-8 my-auto">
            <SocialMediaBar
              socialMediaLinks={footer.socialMediaLinks}
              buttonBackground={socialMediaButtonBackground}
            />
          </div>
        </Row>
      </Container>
    </>
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
