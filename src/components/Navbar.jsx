import React, { useEffect, useState } from "react";
import { customNavbar, topNavExpand, topNavCollapse } from "../stylesheets/components/Navbar.module.sass";

/*
  - CHANGE TEXT COLOUR TO WHITE
  - CUSTOM FONTS??? THAT IS PROBABLY GOING TO BE A DIFFERENT BRANCH
  - PAGE AUTO SCROLL WHEN ELEMENT IS CLICKED
  - ADD LINK FOR INTERACTIVE RESUME
  - MOBILE MODE? HAMBURGER MENU
  - MAKE IT EFFICIENT!
 */

export default function Navbar() {
  const [navbarExpanded, setNavbarExpanded] = useState(true);

  function handleScroll() {
    if (window.pageYOffset > 50) {
      console.log("Collapse Navbar");
      setNavbarExpanded(false);
    } else {
      console.log("Expand Navbar");
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
      className={`navbar fixed-top navbar-expand-md ${customNavbar} ${navbarExpanded ? topNavExpand : topNavCollapse}`}
    >
      <div className="container">
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbar-collapse"
        >
          <span className="sr-only">Toggle navigation</span>
          &#x2630;
        </button>
        <a className="navbar-brand page-scroll" href="#page-top">
          CELIK KOSEOGLU
        </a>
        <div className="collapse navbar-collapse" id="navbar-collapse">
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item">
              <a className="page-scroll nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="page-scroll nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="page-scroll nav-link" href="#ongoingProjects">
                Ongoing Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="page-scroll nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
