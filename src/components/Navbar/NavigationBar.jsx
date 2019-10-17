import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import {
  customNavbar,
  topNavExpand,
  topNavCollapse,
  brand,
  whiteLink,
  navbarToggle,
  navbarButton
} from "../../stylesheets/components/NavigationBar.module.sass";
import NavbarItem from "./NavbarItem";

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
      <Container>
        <NavbarItem
          title={content.heroTitle}
          reference={content.heroReference}
          className={brand}
        />
        <Navbar.Toggle
          className={navbarToggle}
          aria-controls="basic-navbar-nav"
        >
          <span className={navbarButton} />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" />
          {content.items.map(item => (
            <NavbarItem
              title={item.title}
              reference={item.reference}
              className={whiteLink}
            />
          ))}
          <Nav.Link className={`${whiteLink} page-scroll nav-link`} href="/cv">
            {content.interactiveResume}
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

NavigationBar.propTypes = {
  content: PropTypes.node.isRequired
};

export default NavigationBar;
