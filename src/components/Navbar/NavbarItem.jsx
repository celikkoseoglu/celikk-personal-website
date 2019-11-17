import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-scroll";
import Nav from "react-bootstrap/Nav";

const NavbarItem = ({ title, reference, href, className }) => {
  if (reference != null) {
    return (
      <Link
        className={`${className} page-scroll nav-link`}
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
  }
  return (
    <Nav.Link className={className} href={href}>
      {title}
    </Nav.Link>
  );
};

NavbarItem.propTypes = {
  title: PropTypes.string.isRequired,
  reference: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string
};

NavbarItem.defaultProps = {
  reference: PropTypes.null,
  href: PropTypes.null,
  className: PropTypes.null
};

export default NavbarItem;
