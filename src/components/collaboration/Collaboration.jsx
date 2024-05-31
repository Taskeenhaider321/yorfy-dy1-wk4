import React from "react";
import "./collaboration.css";
import Logo1 from "../../assets/Logo1.svg";
import Logo2 from "../../assets/Logo2.svg";
import Logo3 from "../../assets/Logo3.svg";
import LogoLogo from "../../assets/LogoLogo.png";

const Collaboration = () => {
  return (
    <>
      <div className="collaboration__section">
        <div className="collaboration__collection">Collaboration</div>
        <div className="collaboration__heading">Our Partners</div>
        <div className="collaboration__logo">
          <div className="collaboration__secton-first collaboration__logo">
            <img src={Logo1} />
            <img src={Logo2} />
          </div>
          <div className="collaboration__secton-second collaboration__logo">
            <img src={Logo3} />
            <img src={LogoLogo} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Collaboration;
