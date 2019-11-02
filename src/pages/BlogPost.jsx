import React from "react";
import "../index.sass";
import "bootstrap/dist/css/bootstrap.css";
import Markdown from "markdown-to-jsx";

const BlogPost = () => {
  return (
    <div className="container">
      <Markdown># Hello world!</Markdown>
    </div>
  );
};

export default BlogPost;
