import React, { useEffect } from "react";
import "../index.sass";
import CustomButton from "../components/CustomButton";
import { notFoundStyle, customButton, noMargin } from "../stylesheets/NotFound.module.sass";
import { firebaseAnalytics } from "../firebaseConfig";
import MetaDecorator from "../components/Util/MetaDecorator";
import metaThumbnail from "../data/images/meta/notFound.png";

const notFound = require("../data/notFound");

const NotFound = () => {
  useEffect(() => {
    firebaseAnalytics.logEvent("404_visited");
  });

  return (
    <div className={notFoundStyle}>
      <MetaDecorator
        description={notFound.pageDescription}
        title={notFound.pageTitle}
        imageUrl={metaThumbnail}
        imageAlt={notFound.metaImageAlt}
      />
      <div>
        <h1 className={noMargin}>{notFound.notFoundMessage}</h1>
        <p>The page you’re looking for is not there</p>
        <CustomButton
          className={customButton}
          text={notFound.leftButtonText}
          to={notFound.leftButtonLink}
          href={notFound.leftButtonLink}
        />
        <CustomButton
          className={customButton}
          text={notFound.rightButtonText}
          to={notFound.rightButtonLink}
          href={notFound.rightButtonLink}
        />
      </div>
    </div>
  );
};

export default NotFound;
