import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-scroll";
import {
  customPadding
} from "../../stylesheets/components/NavigationBarItem.module.sass";

const NavbarItem = ({ title, reference, className }) => {
  return (
    <Link
      className={`${className} ${customPadding} page-scroll nav-link`}
      to={reference}
      smooth
      offset={-50}
      duration={500}
      ignoreCancelEvents={false}
      href="/"
    >
      {title}
    </Link>
  );
};

NavbarItem.propTypes = {
  title: PropTypes.string.isRequired,
  reference: PropTypes.string.isRequired,
  className: PropTypes.string
};

NavbarItem.defaultProps = {
  className: PropTypes.null
};

export default NavbarItem;
