import React from "react";
import "../index.sass";
import CustomButton from "../components/CustomButton";
import { notFound, customButton } from "../stylesheets/NotFound.module.sass";

const NotFound = () => {
  return (
    <div className={notFound}>
      <div>
        <h1>404</h1>
        <p>The page you’re looking for is not there</p>
        <CustomButton className={customButton} text="Home" to="/" href="/" />
        <CustomButton className={customButton} text="Blog" to="/blog" href="/blog" />
      </div>
    </div>
  );
};

export default NotFound;
