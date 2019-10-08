import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-scroll";
import {
  customNavbar,
  topNavExpand,
  topNavCollapse,
  coloredLink,
  whiteLink
} from "../../stylesheets/components/Navbar.module.sass";
import NavbarItem from "./NavbarItem";

/*
  - CUSTOM FONTS??? THAT IS PROBABLY GOING TO BE A DIFFERENT BRANCH
  - ADD LINK FOR INTERACTIVE RESUME
  - MOBILE MODE? HAMBURGER MENU
  - MAKE IT EFFICIENT!
 */

const Navbar = ({ content }) => {
  const [navbarExpanded, setNavbarExpanded] = useState(true);

  function handleScroll() {
    if (window.pageYOffset > 50 && navbarExpanded) {
      setNavbarExpanded(false);
    } else if (window.pageYOffset < 50 && !navbarExpanded) {
      setNavbarExpanded(true);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

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

        <Link
          className={`${coloredLink} navbar-brand page-scroll`}
          href="#page-top"
          to={content.heroReference}
          spy
          smooth
          duration={500}
          ignoreCancelEvents={false}
        >
          {content.heroTitle}
        </Link>

        <div className="collapse navbar-collapse" id="navbar-collapse">
          <ul className="nav navbar-nav ml-auto">
            {content.items.map(item => (
              <NavbarItem title={item.title} reference={item.reference} />
            ))}
            <a className={`${whiteLink} page-scroll nav-link`} href="/cv">
              Interactive Resume
            </a>
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
