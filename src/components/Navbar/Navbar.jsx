import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  customNavbar,
  topNavExpand,
  topNavCollapse,
  coloredLink
} from "../../stylesheets/components/Navbar.module.sass";
import NavbarItem from "./NavbarItem";

/*
  - CUSTOM FONTS??? THAT IS PROBABLY GOING TO BE A DIFFERENT BRANCH
  - PAGE AUTO SCROLL WHEN ELEMENT IS CLICKED
  - ADD LINK FOR INTERACTIVE RESUME
  - MOBILE MODE? HAMBURGER MENU
  - MAKE IT EFFICIENT!
 */

const Navbar = ({ content }) => {
  const [navbarExpanded, setNavbarExpanded] = useState(true);

  function handleScroll() {
    if (window.pageYOffset > 50) {
      setNavbarExpanded(false);
    } else {
      setNavbarExpanded(true);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar fixed-top navbar-expand-md ${customNavbar} ${
        navbarExpanded ? topNavExpand : topNavCollapse
      }`}
    >
      <div className="container">
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbar-collapse"
        >
          <span className="sr-only">Toggle navigation</span>&#x2630;
        </button>
        <a
          className={`${coloredLink} navbar-brand page-scroll`}
          href="#page-top"
        >
          {content.heroTitle}
        </a>
        <div className="collapse navbar-collapse" id="navbar-collapse">
          <ul className="nav navbar-nav ml-auto">
            {content.items.map(item => (
              <NavbarItem title={item.title} reference={item.reference} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  content: PropTypes.node.isRequired
};

export default Navbar;
