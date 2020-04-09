import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavbarItem from "./NavbarItem";
import {
  customNavbar,
  topNavExpand,
  topNavCollapse,
  brand,
  whiteLink,
  navbarToggle,
  navbarButton,
} from "../../stylesheets/components/Navbar/NavigationBar.module.sass";

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
          href={content.heroLink}
          className={brand}
        />
        <Navbar.Toggle className={navbarToggle} aria-controls="basic-navbar-nav">
          <span className={navbarButton} />
        </Navbar.Toggle>
        <Navbar.Collapse>
          <Nav className="mr-auto" />
          {content.items.map((item) => (
            <NavbarItem
              title={item.title}
              reference={item.reference}
              href={item.href}
              className={whiteLink}
              key={item.title}
            />
          ))}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

NavigationBar.propTypes = {
  content: PropTypes.shape({
    heroTitle: PropTypes.string.isRequired,
    heroReference: PropTypes.string,
    heroLink: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        reference: PropTypes.string,
        href: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default NavigationBar;
