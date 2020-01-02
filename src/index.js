import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import "./index.sass";

const CV = lazy(() => import("./pages/CV"));

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Suspense fallback={<div>Loading...</div>}>
      <Route path="/cv" component={CV} />
    </Suspense>
    <Route exact path="/blog/" component={Blog} />
    <Route path="/blog/:blogPost" component={BlogPost} />
  </BrowserRouter>,
  document.getElementById("root")
);
