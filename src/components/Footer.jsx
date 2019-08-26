import React from "react";
import "font-awesome/css/font-awesome.min.css";
import {
  twitter,
  facebook,
  linkedin,
  github,
  instagram,
  mail
} from "../stylesheets/components/Footer.module.sass";
import Signature from "../data/images/signature.png";

const Footer = () => {
  return (
    <footer className="text-center col-md-12">
      <div className="row">
        <div className="col-md-4">
          <span>Çelik Köseoğlu</span>
          <p className="text-muted">Designed in co-op with Morvaksu</p>
        </div>
        <div className="col-md-4">
          <ul className="list-inline">
            <li className="list-inline-item">
              <a className={twitter} href="https://twitter.com/celikkoseoglu">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                className={facebook}
                href="https://www.facebook.com/celikkoseoglu"
              >
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li className="list-inline-item">
              <a className={linkedin} href="https://linkedin.com/in/celikk">
                <i className="fa fa-linkedin" />
              </a>
            </li>
            <li className="list-inline-item">
              <a className={github} href="https://github.com/celikkoseoglu">
                <i className="fa fa-github" />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                className={instagram}
                href="https://instagram.com/celikkoseoglu"
              >
                <i className="fa fa-instagram" />
              </a>
            </li>
            <li className="list-inline-item">
              <a className={mail} href="mailto:celikkoseoglu@yahoo.com">
                <i className="fa fa-envelope" />
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <span>August 2019</span>
          <br/>
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
