import React from "react";
import PropTypes from "prop-types";
import SpringLi from "../Animations/SpringLi";

const SocialMediaIcon = ({ className, children, link }) => {
  return (
    <SpringLi className="list-inline-item">
      <a className={className} href={link}>
        {children}
      </a>
    </SpringLi>
  );
};

SocialMediaIcon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired
};

SocialMediaIcon.defaultProps = {
  className: null
};

export default SocialMediaIcon;
