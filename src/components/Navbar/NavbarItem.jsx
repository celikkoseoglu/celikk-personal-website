import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-scroll";
import { whiteLink, active } from "../../stylesheets/components/Navbar.module.sass";

const NavbarItem = ({ title, reference }) => {
  return (
    <li className="nav-item">
      <Link
        className={`${whiteLink} page-scroll nav-link`}
        activeClass={active}
        to={reference}
        spy
        smooth
        offset={-50}
        duration={500}
        ignoreCancelEvents={false}
      >
        {title}
      </Link>
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
