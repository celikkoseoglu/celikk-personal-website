import React from "react";
import Row from "../Util/Row";
import {
  footerStyle,
  footerDarkText,
  footerLightText,
  leftText,
  lineSeparator,
  footerName,
  footerList,
  footerLinks,
  signature,
  footerLeft,
  footerRight,
  footerListDescription,
  footerListContainer,
  footerLocation
} from "../../stylesheets/components/Footer/Footer.module.sass";

import SocialMediaBar from "./SocialMediaBar";
import Signature from "../Signature";

const footer = require("../../data/footer");

const Footer = () => {
  return (
    <footer className={footerStyle}>
      <Row>
        <div className={`${footerLeft} ${lineSeparator}`}>
          <p className={`${leftText} ${footerLightText}`}>{footer.leftText}</p>
        </div>

        <div className={`${footerRight}`}>
          <p className={`${footerLightText} ${footerName}`}>{footer.title}</p>
          <p className={`${footerLightText} ${footerLocation}`}>{footer.location}</p>
          <SocialMediaBar socialMediaLinks={footer.socialMediaLinks} />
          <div className={footerListContainer}>
            <p className={`${footerListDescription} ${footerLightText}`}>{footer.linkText}</p>
            <ul className={`${footerLightText} ${footerList}`}>
              {footer.links.map((link, index) => (
                <li key={link} className={footerLinks}>
                  <a href={link} className={footerDarkText}>
                    {footer.videos[index]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Row>

      <Signature className={signature} isDark />
      <p className={footerDarkText}>{footer.date}</p>
    </footer>
  );
};

export default Footer;
