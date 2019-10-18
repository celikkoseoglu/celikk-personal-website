import React from "react";
import PropTypes from "prop-types";

import {
  contactImage,
  contactTitleHeader,
} from "../stylesheets/components/Contact.module.sass";

const Contact = ({
  name,
  title,
  contactTitle,
  addressLine1,
  addressLine2,
  addressLine3,
  imageLink,
  imageAlt
}) => {
  return (
    <React.Fragment>
      <div className="col-md-3 text-center">
        <div>
          <img
            src={imageLink}
            className={`img-fluid rounded-circle ${contactImage}`}
            alt={imageAlt}
          />
          <h4>{name}</h4>
          <p className="text-muted">{title}</p>
        </div>
      </div>
      <div className="col-sm-4 offset-4">
        <div className="contact-form">
          <h3>{contactTitle}</h3>
          <address>
            <strong>{addressLine1}</strong>
            <br />
            {addressLine2}
            <br />
            {addressLine3}
            <br />
          </address>
        </div>
      </div>
    </React.Fragment>
  );
};

Contact.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  contactTitle: PropTypes.string,
  addressLine1: PropTypes.string,
  addressLine2: PropTypes.string,
  addressLine3: PropTypes.string,
  imageLink: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired
};

Contact.defaultProps = {
  name: null,
  title: null,
  contactTitle: null,
  addressLine1: null,
  addressLine2: null,
  addressLine3: null
};

export default Contact;
