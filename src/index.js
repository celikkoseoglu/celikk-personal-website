import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import "./index.sass";
import {BLOG_LINK} from "./utils/Constants.utils";

const CV = lazy(() => import("./pages/CV"));

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Suspense fallback={<div>Loading...</div>}>
      <Route path="/cv" component={CV} />
    </Suspense>
    <Route exact path={BLOG_LINK} component={Blog} />
    <Route path={`${BLOG_LINK}:blogPost`} component={BlogPost} />
  </BrowserRouter>,
  document.getElementById("root")
);
