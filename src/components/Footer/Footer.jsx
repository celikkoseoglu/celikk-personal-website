import React from "react";
import Row from "../Util/Row";
import {
  footerDarkText,
  footerLightText,
  leftText,
  lineSeparator,
  footerName,
  footerList,
  footerLinks,
  signature,
} from "../../stylesheets/components/Footer/Footer.module.sass";

import SocialMediaBar from "./SocialMediaBar";
import Signature from "../Signature";

const footer = require("../../data/footer");

const Footer = () => {
  return (
    <footer className="px-0 pt-md-2">
      <Row>
        <div className={`col-md-6 ${lineSeparator} pr-md-5 pb-2 pb-md-3 pb-md-0 mx-3 mx-md-0`}>
          <p className={`${leftText} ${footerLightText}`}>{footer.leftText}</p>
        </div>

        <div className="pl-md-5 col-md-6 my-auto text-center text-md-left pt-3 pt-md-0">
          <p className={`${footerLightText} ${footerName} mb-1`}>{footer.title}</p>
          <p className={`${footerLightText} mb-3`}>{footer.location}</p>
          <SocialMediaBar socialMediaLinks={footer.socialMediaLinks} />
          <div className="pt-4">
            <p className={`mb-2 ${footerLightText}`}>{footer.linkText}</p>
            <ul className={`pl-md-2 pl-0 ${footerLightText} ${footerList} mb-0`}>
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
