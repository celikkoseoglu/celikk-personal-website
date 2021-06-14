import React from "react";
import PropTypes from "prop-types";

import {
  line,
  line1,
  line2,
  navbarToggle,
} from "../../stylesheets/components/Navbar/NavbarToggle.module.sass";

const NavbarToggle = ({ collapsed, onClickMethod, className }) => (
  <button
    type="button"
    aria-label="Navbar Toggle"
    onClick={() => onClickMethod(!collapsed)}
    className={`${className} ${navbarToggle}`}
  >
    <span className={`${line} ${!collapsed && line1}`} />
    <span className={`${line} ${!collapsed && line2}`} />
  </button>
);

NavbarToggle.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  onClickMethod: PropTypes.func.isRequired,
  className: PropTypes.string,
};

NavbarToggle.defaultProps = {
  className: null,
};

export default NavbarToggle;
