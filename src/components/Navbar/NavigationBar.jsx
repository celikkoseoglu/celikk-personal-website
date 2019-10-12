import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
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
  - MOBILE MODE? HAMBURGER MENU
 */

const NavigationBar = ({ content }) => {
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
    <Navbar
      className={`navbar fixed-top navbar-expand-md ${customNavbar} ${
        navbarExpanded ? topNavExpand : topNavCollapse
      }`}
      fixed="top"
      expand="md"
    >
      <div className="container">
        <NavbarItem
          title={content.heroTitle}
          reference={content.heroReference}
        />

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" />
          {content.items.map(item => (
            <NavbarItem title={item.title} reference={item.reference} />
          ))}
          <Nav.Link className={`${whiteLink} page-scroll nav-link`} href="/cv">
            Interactive Resume
          </Nav.Link>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

NavigationBar.propTypes = {
  content: PropTypes.node.isRequired
};

export default NavigationBar;
