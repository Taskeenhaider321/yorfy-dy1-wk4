import React from "react";
import "./header.css";
import divider from "../../assets/Divider.svg";
import ai from "../../assets/ai.png";
import CountUp from 'react-countup';

import { Navbar } from "../../components";
const Headering = () => {
  return (
    <div className="header-section-image">
      <Navbar />
      <div className="gpt3__header section__padding" id="home">
        <div className="gpt3__header-content">
          <p>Welcome to Yorfy</p>
          <h1 className="gradient__text">
            Now Available, Meet Yorfy NFT Collection ⭐️
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
            <div className="number__section">
              <div className="">
                <p className="number__section-counting"><CountUp delay={2} end={546}/></p>
                <p className="number__section-items">NFT Items</p>
              </div>
              <div className="">
                <img src={divider} />
              </div>
              <div className="">
                <p className="number__section-counting"><CountUp delay={2} end={42}/></p>
                <p className="number__section-items">Owners</p>
              </div>
              <div className="">
                <img src={divider} />
              </div>
              <div className="">
                <p className="number__section-counting"><CountUp delay={2} end={378}/></p>
                <p className="number__section-items">Items Sold</p>
              </div>
            </div>
        </div>

        <div className="gpt3__header-image">
          <img src={ai} alt="ai" />
        </div>
      </div>
    </div>
  );
};

export default Headering;
