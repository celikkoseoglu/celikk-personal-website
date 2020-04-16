import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
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
  mobileNavbar,
  navbarLinks,
  mobileNavbarLinksCollapsed,
  mobileNavbarLinksExpanded,
} from "../../stylesheets/components/Navbar/NavigationBar.module.sass";
import Container from "../Util/Container";

const NavigationBar = ({ content }) => {
  const [navbarExpanded, setNavbarExpanded] = useState(true);
  const [mobileNavbarCollapsed, setMobileNavbarCollapsed] = useState(true);
  const [transparency, setTransparency] = useState(0.0);

  function handleScroll() {
    if (window.pageYOffset > 50 && navbarExpanded) {
      setNavbarExpanded(false);
    } else if (window.pageYOffset < 50 && !navbarExpanded) {
      setNavbarExpanded(true);
    }

    if (window.pageYOffset > 500) {
      setTransparency(1);
    } else {
      setTransparency(window.pageYOffset / 500.0);
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
      style={
        mobileNavbarCollapsed
          ? {
              backgroundColor: `rgba(27, 27, 27, ${transparency * 0.85})`,
              backdropFilter: `blur(${transparency * 5}px)`,
            }
          : {
              backgroundColor: `rgba(27, 27, 27, 0.85)`,
              backdropFilter: `blur(${transparency * 5}px)`,
            }
      }
      className={`${customNavbar} ${navbarExpanded ? topNavExpand : topNavCollapse}`}
    >
      <Container className={navbarContainer}>
        <div className={mobileNavbar}>
          <NavbarItem
            title={content.heroTitle}
            reference={content.heroReference}
            href={content.heroLink}
            className={brand}
          />
          <button
            onClick={(_) => setMobileNavbarCollapsed(!mobileNavbarCollapsed)}
            className={navbarToggle}
            aria-controls="basic-navbar-nav"
            type="button"
          >
            <span className={navbarButton} />
          </button>
        </div>
        <div
          className={`${navbarLinks} ${
            mobileNavbarCollapsed ? mobileNavbarLinksCollapsed : mobileNavbarLinksExpanded
          }`}
        >
          {content.items.map((item) => (
            <NavbarItem
              title={item.title}
              reference={item.reference}
              href={item.href}
              className={whiteLink}
              key={item.title}
            />
          ))}
        </div>
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
