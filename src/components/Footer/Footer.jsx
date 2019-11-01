import React from "react";
import "font-awesome/css/font-awesome.min.css";
import {
  twitter,
  facebook,
  linkedin,
  github,
  instagram,
  mail
} from "../../stylesheets/components/Footer.module.sass";
import Signature from "../../data/images/signature.png";
import SocialMediaIcon from "./SocialMediaIcon";

const Footer = () => {
  return (
    <footer className="text-center col-md-12">
      <div className="row">
        <div className="col-md-4">
          <span>Çelik Köseoğlu</span>
          <p className="text-muted">Designed in co-op with Morvaksu</p>
        </div>
        <div className="col-md-4 my-auto">
          <ul className="list-inline my-auto">
            <SocialMediaIcon
              className={twitter}
              faClassName="fa-twitter"
              link="https://twitter.com/celikkoseoglu"
            />
            <SocialMediaIcon
              className={facebook}
              faClassName="fa-facebook"
              link="https://www.facebook.com/celikkoseoglu"
            />
            <SocialMediaIcon
              className={linkedin}
              faClassName="fa-linkedin"
              link="https://linkedin.com/in/celikk"
            />
            <SocialMediaIcon
              className={github}
              faClassName="fa-github"
              link="https://github.com/celikkoseoglu"
            />
            <SocialMediaIcon
              className={instagram}
              faClassName="fa-instagram"
              link="https://instagram.com/celikkoseoglu"
            />
            <SocialMediaIcon
              className={mail}
              faClassName="fa-envelope"
              link="mailto:celikkoseoglu@yahoo.com"
            />
          </ul>
        </div>
        <div className="col-md-4">
          <span>August 2019</span>
          <br />
          <img
            src={Signature}
            alt="signature"
            className="img-responsive img-centered"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
