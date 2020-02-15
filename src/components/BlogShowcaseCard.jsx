import React from "react";
import PropTypes from "prop-types";
import { square } from "../stylesheets/components/BlogShowcaseCard.module.sass";

const BlogShowcaseCard = ({ title, subtitle, timestamp, link }) => {
  return (
    <div className={square}>
      <h6>Reduce Your React Bundle Size by Importing Only the Required Favicons.</h6>
      <p>
        Introducing React-Icons. A node dependency that allows you to select import icons instead of
        the whole favicon css
      </p>
      <p>January 03, 2020 - 5 min read</p>
    </div>
  );
};

BlogShowcaseCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default BlogShowcaseCard;
