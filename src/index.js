import "react-app-polyfill/ie11"; // required for IE11
import "react-app-polyfill/stable"; // required for IE11
import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import "./index.sass";
import { BLOG_LINK } from "./utils/Constants.utils";

const CV = lazy(() => import("./pages/CV"));
const NotFound = lazy(() => import("./pages/NotFound"));

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path={BLOG_LINK} component={Blog} />
      <Route exact path={`${BLOG_LINK}:blogPostFileName`} component={BlogPost} />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/cv" component={CV} />
          <Route exact path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
      </Suspense>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
