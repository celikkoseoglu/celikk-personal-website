import React from "react";
import "font-awesome/css/font-awesome.min.css";
import {
  socialMediaButton,
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
          <div className="pt-3">
            <a
              href="https://www.youtube.com/watch?v=2sxI11_lxSg&list=PLNkfllcUq3AkdeD4Aqp_Z2AIGyyF00_d8&index=39"
              className="text-muted"
            >
              Want to see how this website is made?
            </a>
          </div>
        </div>
        <div className="col-md-4 my-auto">
          <ul className="list-inline my-auto">
            <SocialMediaIcon
              className={`${twitter} ${socialMediaButton}`}
              faClassName="fa-twitter"
              link="https://twitter.com/celikkoseoglu"
            />
            <SocialMediaIcon
              className={`${facebook} ${socialMediaButton}`}
              faClassName="fa-facebook"
              link="https://www.facebook.com/celikkoseoglu"
            />
            <SocialMediaIcon
              className={`${linkedin} ${socialMediaButton}`}
              faClassName="fa-linkedin"
              link="https://linkedin.com/in/celikk"
            />
            <SocialMediaIcon
              className={`${github} ${socialMediaButton}`}
              faClassName="fa-github"
              link="https://github.com/celikkoseoglu"
            />
            <SocialMediaIcon
              className={`${instagram} ${socialMediaButton}`}
              faClassName="fa-instagram"
              link="https://instagram.com/celikkoseoglu"
            />
            <SocialMediaIcon
              className={`${mail} ${socialMediaButton}`}
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
