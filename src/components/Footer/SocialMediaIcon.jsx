import React from "react";
import PropTypes from "prop-types";
import { inlineListItem } from "../../stylesheets/components/Footer/SocialMediaIcon.module.sass";

const SocialMediaIcon = ({ className, children, link, ariaLabel }) => (
  <li className={inlineListItem}>
    <a className={className} href={link} aria-label={ariaLabel}>
      {children}
    </a>
  </li>
);

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
