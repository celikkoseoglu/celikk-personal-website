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
  navbarContainer,
} from "../../stylesheets/components/Navbar/NavigationBar.module.sass";
import Row from "../Util/Row";

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
    <nav
      className={`${customNavbar} ${navbarExpanded ? topNavExpand : topNavCollapse}`}
    >
      <Container className={navbarContainer}>
        <NavbarItem
          title={content.heroTitle}
          reference={content.heroReference}
          href={content.heroLink}
          className={brand}
        />
        <button className={navbarToggle} aria-controls="basic-navbar-nav">
          <span className={navbarButton} />
        </button>
        <Row>
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
        </Row>
      </Container>
    </nav>
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
