import React from "react";
import PropTypes from "prop-types";
import SocialMediaIcon from "./SocialMediaIcon";
import {
  facebook,
  github,
  instagram,
  linkedin,
  mail,
  socialMediaButton,
  twitter
} from "../../stylesheets/components/Footer.module.sass";

const SocialMediaBar = ({ socialMediaLinks, buttonBackground }) => {
  return (
    <>
      <ul className="list-inline my-auto">
        <SocialMediaIcon
          className={`${twitter} ${socialMediaButton} ${buttonBackground}`}
          faClassName="fa-twitter"
          link={socialMediaLinks.twitterLink}
        />
        <SocialMediaIcon
          className={`${facebook} ${socialMediaButton} ${buttonBackground}`}
          faClassName="fa-facebook"
          link={socialMediaLinks.facebookLink}
        />
        <SocialMediaIcon
          className={`${linkedin} ${socialMediaButton} ${buttonBackground}`}
          faClassName="fa-linkedin"
          link={socialMediaLinks.linkedinLink}
        />
        <SocialMediaIcon
          className={`${github} ${socialMediaButton} ${buttonBackground}`}
          faClassName="fa-github"
          link={socialMediaLinks.githubLink}
        />
        <SocialMediaIcon
          className={`${instagram} ${socialMediaButton} ${buttonBackground}`}
          faClassName="fa-instagram"
          link={socialMediaLinks.instagramLink}
        />
        <SocialMediaIcon
          className={`${mail} ${socialMediaButton} ${buttonBackground}`}
          faClassName="fa-envelope"
          link={socialMediaLinks.emailLink}
        />
      </ul>
    </>
  );
};

SocialMediaBar.propTypes = {
  socialMediaLinks: PropTypes.shape({
    twitterLink: PropTypes.string.isRequired,
    facebookLink: PropTypes.string.isRequired,
    linkedinLink: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
    instagramLink: PropTypes.string.isRequired,
    emailLink: PropTypes.string.isRequired
  }).isRequired,
  buttonBackground: PropTypes.string
};

SocialMediaBar.defaultProps = {
  buttonBackground: null
};

export default SocialMediaBar;
