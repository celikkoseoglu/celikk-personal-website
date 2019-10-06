import React from "react";
import PropTypes from "prop-types";
import { whiteLink } from "../../stylesheets/components/Navbar.module.sass";

const NavbarItem = ({ title, reference }) => {
  return (
    <li className="nav-item">
      <a className={`${whiteLink} page-scroll nav-link`} href={`#${reference}`}>
        {title}
      </a>
    </li>
  );
};

NavbarItem.propTypes = {
  title: PropTypes.string,
  reference: PropTypes.string
};

NavbarItem.defaultProps = {
  title: null,
  reference: null
};

export default NavbarItem;
