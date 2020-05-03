import React, { useEffect } from "react";
import "../index.sass";
import CustomButton from "../components/CustomButton";
import { notFound, customButton, noMargin } from "../stylesheets/NotFound.module.sass";
import { firebaseAnalytics } from "../firebaseConfig";

const NotFound = () => {
  useEffect(() => {
    firebaseAnalytics.logEvent("404_visited");
  });

  return (
    <div className={notFound}>
      <div>
        <h1 className={noMargin}>404</h1>
        <p>The page you’re looking for is not there</p>
        <CustomButton className={customButton} text="Home" to="/" href="/" />
        <CustomButton className={customButton} text="Blog" to="/blog" href="/blog" />
      </div>
    </div>
  );
};

export default NotFound;
