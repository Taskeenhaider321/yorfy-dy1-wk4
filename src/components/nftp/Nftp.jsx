import React from "react";
import { Card, CardTitle, CardBody } from "reactstrap";
import Pic1 from "../../assets/pic1.png";
import Pic2 from "../../assets/pic2.png";
import Pic3 from "../../assets/pic3.png";
import logo from "../../assets/logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./nftp.css";

const Nftp = () => {
  return (
    <div className="nftp__section">
      <div className="nftp__collection">Collection</div>
      <div className="nftp__heading">Yorfy NFT Collections</div>
      <div className="nftp__paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <div className="card__central">
      <Card body className="card__background" outline >
        <img alt="Sample" className="image__card__three" src={Pic1} />
        <CardBody className="card__body__image">
          <img alt="Sample" src={logo}/>
          <CardTitle tag="h4" className="card__text m-2">YorNoose #432</CardTitle>
        </CardBody>
      </Card>
      <Card body className="card__background" outline >
        <img alt="Sample" className="image__card__three" src={Pic2} />
        <CardBody className="card__body__image">
          <img alt="Sample" src={logo}/>
          <CardTitle tag="h4" className="card__text m-2">YorNoose #332</CardTitle>
        </CardBody>
      </Card>
      <Card body className="card__background" outline >
        <img alt="Sample" className="image__card__three" src={Pic3} />
        <CardBody className="card__body__image">
          <img alt="Sample" src={logo}/>
          <CardTitle tag="h4" className="card__text m-2">YorMwoth #765</CardTitle>
        </CardBody>
      </Card>
      </div>

      <div className="nftp__Button">View on OpenSea</div>
    </div>
  );
};

export default Nftp;
