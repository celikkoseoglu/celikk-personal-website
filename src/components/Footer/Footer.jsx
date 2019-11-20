import React from "react";
import "font-awesome/css/font-awesome.min.css";
import PropTypes from "prop-types";
import {
  socialMediaButton,
  twitter,
  facebook,
  linkedin,
  github,
  instagram,
  mail
} from "../../stylesheets/components/Footer.module.sass";
import SocialMediaIcon from "./SocialMediaIcon";

const Footer = ({ content, signatureImage }) => {
  return (
    <footer className="text-center col-md-12">
      <div className="row">
        <div className="col-md-4">
          <span>{content.title}</span>
          <div className="pt-md-3 pb-md-0 py-2">
            <a href={content.link} className="text-muted">
              {content.linkText}
            </a>
          </div>
        </div>
        <div className="col-md-4 my-auto">
          <ul className="list-inline my-auto">
            <SocialMediaIcon
              className={`${twitter} ${socialMediaButton}`}
              faClassName="fa-twitter"
              link={content.twitterLink}
            />
            <SocialMediaIcon
              className={`${facebook} ${socialMediaButton}`}
              faClassName="fa-facebook"
              link={content.facebookLink}
            />
            <SocialMediaIcon
              className={`${linkedin} ${socialMediaButton}`}
              faClassName="fa-linkedin"
              link={content.linkedinLink}
            />
            <SocialMediaIcon
              className={`${github} ${socialMediaButton}`}
              faClassName="fa-github"
              link={content.githubLink}
            />
            <SocialMediaIcon
              className={`${instagram} ${socialMediaButton}`}
              faClassName="fa-instagram"
              link={content.instagramLink}
            />
            <SocialMediaIcon
              className={`${mail} ${socialMediaButton}`}
              faClassName="fa-envelope"
              link={content.emailLink}
            />
          </ul>
        </div>
        <div className="col-md-4">
          <span>{content.date}</span>
          <br />
          <img src={signatureImage} alt="signature" className="img-responsive img-centered" />
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    twitterLink: PropTypes.string.isRequired,
    facebookLink: PropTypes.string.isRequired,
    linkedinLink: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
    instagramLink: PropTypes.string.isRequired,
    emailLink: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }).isRequired,
  signatureImage: PropTypes.string.isRequired
};

export default Footer;
