import React from "react";
import PropTypes from "prop-types";

const SocialMediaIcon = ({ className, children, link, ariaLabel }) => {
  return (
    <li className="list-inline-item">
      <a className={className} href={link} aria-label={ariaLabel}>
        {children}
      </a>
    </li>
  );
};

SocialMediaIcon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
};

SocialMediaIcon.defaultProps = {
  className: null,
};

export default SocialMediaIcon;
