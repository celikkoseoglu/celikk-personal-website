import React from "react";
import PropTypes from "prop-types";
import {
  FaTwitter,
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";
import SocialMediaIcon from "./SocialMediaIcon";
import {
  facebook,
  github,
  instagram,
  linkedin,
  mail,
  socialMediaButton,
  twitter
} from "../../stylesheets/components/Footer/Footer.module.sass";

const SocialMediaBar = ({ socialMediaLinks, buttonBackground }) => {
  return (
    <>
      <ul className="list-inline my-auto">
        <SocialMediaIcon
          className={`${twitter} ${socialMediaButton} ${buttonBackground}`}
          link={socialMediaLinks.twitterLink}
          ariaLabel={socialMediaLinks.twitterAriaLabel}
        >
          <FaTwitter />
        </SocialMediaIcon>
        <SocialMediaIcon
          className={`${facebook} ${socialMediaButton} ${buttonBackground}`}
          link={socialMediaLinks.facebookLink}
          ariaLabel={socialMediaLinks.facebookAriaLabel}
        >
          <FaFacebookF />
        </SocialMediaIcon>
        <SocialMediaIcon
          className={`${linkedin} ${socialMediaButton} ${buttonBackground}`}
          link={socialMediaLinks.linkedinLink}
          ariaLabel={socialMediaLinks.linkedinAriaLabel}
        >
          <FaLinkedinIn />
        </SocialMediaIcon>
        <SocialMediaIcon
          className={`${github} ${socialMediaButton} ${buttonBackground}`}
          link={socialMediaLinks.githubLink}
          ariaLabel={socialMediaLinks.githubAriaLabel}
        >
          <FaGithub />
        </SocialMediaIcon>
        <SocialMediaIcon
          className={`${instagram} ${socialMediaButton} ${buttonBackground}`}
          link={socialMediaLinks.instagramLink}
          ariaLabel={socialMediaLinks.instagramAriaLabel}
        >
          <FaInstagram />
        </SocialMediaIcon>
        <SocialMediaIcon
          className={`${mail} ${socialMediaButton} ${buttonBackground}`}
          link={socialMediaLinks.emailLink}
          ariaLabel={socialMediaLinks.emailAriaLabel}
        >
          <FaEnvelope />
        </SocialMediaIcon>
      </ul>
    </>
  );
};

SocialMediaBar.propTypes = {
  socialMediaLinks: PropTypes.shape({
    twitterLink: PropTypes.string.isRequired,
    twitterAriaLabel: PropTypes.string.isRequired,
    facebookLink: PropTypes.string.isRequired,
    facebookAriaLabel: PropTypes.string.isRequired,
    linkedinLink: PropTypes.string.isRequired,
    linkedinAriaLabel: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
    githubAriaLabel: PropTypes.string.isRequired,
    instagramLink: PropTypes.string.isRequired,
    instagramAriaLabel: PropTypes.string.isRequired,
    emailLink: PropTypes.string.isRequired,
    emailAriaLabel: PropTypes.string.isRequired
  }).isRequired,
  buttonBackground: PropTypes.string
};

SocialMediaBar.defaultProps = {
  buttonBackground: null
};

export default SocialMediaBar;
