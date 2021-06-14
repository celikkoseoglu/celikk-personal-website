import React, { useEffect, useState } from "react";
import NavbarItem from "./NavbarItem";
import {
  brand,
  customNavbar,
  mobileNavbar,
  mobileNavbarLinksCollapsed,
  mobileNavbarLinksExpanded,
  navbarContainer,
  navbarLinks,
  navbarToggle,
  topNavCollapse,
  topNavExpand,
  whiteLink,
} from "../../stylesheets/components/Navbar/NavigationBar.module.sass";
import Container from "../Util/Container";
import NavbarToggle from "./NavbarToggle";
import { debounce, throttle } from "../../utils/Limitors";

const content = require("../../data/navbar.json");

const NavigationBar = () => {
  const [navbarExpanded, setNavbarExpanded] = useState(true);
  const [mobileNavbarCollapsed, setMobileNavbarCollapsed] = useState(true);
  const [transparency, setTransparency] = useState(0.0);

  function handleScroll() {
    if (window.pageYOffset > 50) {
      setNavbarExpanded(false);
    } else if (window.pageYOffset < 50) {
      setNavbarExpanded(true);
    }

    if (window.pageYOffset > 500) {
      setTransparency(1);
    } else {
      setTransparency(window.pageYOffset / 500.0);
    }

    setMobileNavbarCollapsed(true);
  }

  useEffect(() => {
    window.addEventListener("scroll", throttle(debounce(handleScroll)));
    return () => window.removeEventListener("scroll", throttle(debounce(handleScroll)));
  }, []);

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
            reference={content.landingReference}
            className={brand}
          />
          <NavbarToggle
            onClickMethod={setMobileNavbarCollapsed}
            collapsed={mobileNavbarCollapsed}
            className={navbarToggle}
          />
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

export default NavigationBar;
