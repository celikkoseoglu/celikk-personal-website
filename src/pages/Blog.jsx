import React from "react";
import { Container, Row } from "react-bootstrap";
import BlogItem from "../components/BlogItem";

import { profilePicture, background, blogTitleFont } from "../stylesheets/Blog.module.sass";
import Signature from "../data/images/signature.svg";
import { signature } from "../stylesheets/components/Footer.module.sass";
import SocialMediaBar from "../components/Footer/SocialMediaBar";
import { socialMediaButtonBackground } from "../stylesheets/BlogPost.module.sass";

const blog = require("../data/blog");
const footer = require("../data/footer");

const Blog = () => {
  return (
    <div className={background}>
      <Container className="pt-md-5 py-4">
        <div className="col-md-8 mx-auto px-0">
          <h1 className="pb-md-5 py-4 pt-md-0">{blog.name}</h1>
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
              <br />
              <img
                src={Signature}
                alt="signature"
                className={`img-responsive img-centered ${signature}`}
              />
            </div>
            <div className="col-md-8 my-auto px-0">
              <SocialMediaBar
                socialMediaLinks={footer.socialMediaLinks}
                buttonBackground={socialMediaButtonBackground}
              />
            </div>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
