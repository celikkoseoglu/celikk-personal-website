import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import {
  customNavbar,
  topNavExpand,
  topNavCollapse,
  brand
} from "../../stylesheets/components/BlogNavigationBar.module.sass";

const BlogNavigationBar = ({ content }) => {
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
        <Link className={brand} to="/">
          {content.heroTitle}
        </Link>
      </Container>
    </Navbar>
  );
};

BlogNavigationBar.propTypes = {
  content: PropTypes.shape({
    heroTitle: PropTypes.string.isRequired
  }).isRequired
};

export default BlogNavigationBar;
