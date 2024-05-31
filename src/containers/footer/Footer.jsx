import React from "react";
import logo from "../../assets/logo.svg";
import "./footer.css";

const Footer = () => {
  return (
    <div style={{ color: "white" }}>
      <div className="footer__links">
        <div className="logo__footer">
          <div className="footer__links_logo">
            <img src={logo} alt="logo" />
            <p>YORFY</p>
          </div>
          <div className="circle-row">
            <div className="circle">AB</div>
            <div className="circle">CD</div>
            <div className="circle">EF</div>
            <div className="circle">GH</div>
          </div>
        </div>
        <div className="line"></div>
        <div className="copyright-row">
          <p>© 2022 Yorfy Template • All Rights Reserved</p>
          <p>Made With Love by Groweb Studio</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
