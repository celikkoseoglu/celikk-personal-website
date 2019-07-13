import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Home from "./pages/Home";
import CV from "./pages/CV";

import "./index.sass";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Box m={2} />
    <Route exact path="/" component={Home} />
    <Route path="/cv" component={CV} />
  </BrowserRouter>,
  document.getElementById("root")
);
