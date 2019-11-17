import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import CV from "./pages/CV";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

import "./index.sass";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Route path="/cv" component={CV} />
    <Route path="/blog/" component={Blog} />
    <Route path="/blog/:blogPost" component={BlogPost} />
  </BrowserRouter>,
  document.getElementById("root")
);
