import React from "react";
import PropTypes from "prop-types";
import SpringLi from "../Animations/SpringLi";

const SocialMediaIcon = ({ className, faClassName, link }) => {
  return (
    <SpringLi className="list-inline-item">
      <a className={className} href={link}>
        <i className={`fa ${faClassName}`} />
      </a>
    </SpringLi>
  );
};

SocialMediaIcon.propTypes = {
  className: PropTypes.string,
  faClassName: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

SocialMediaIcon.defaultProps = {
  className: null
};

export default SocialMediaIcon;
