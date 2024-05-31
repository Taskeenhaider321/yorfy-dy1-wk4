import React from "react";
import "./trending.css";
import logo from '../../assets/trending_1.png';

const Trending = () => {
  return (
    <>
    <div className="trending__section">
      <div className="trending__featured">Featured</div>
      <div className="trending__heading">Hot Trending On This Week from Yorfy</div>
      <div className="trending__paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </div>
    <div className="trending__section_right">
      <div className="left-section">
        <div className="circle-container">
          <div className="circle-background"></div>
          <div className="overlay"></div>
        </div>
        <div className="text-section">
          <div className="title">YorEyes #234</div>
          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </div>

      <img className="image" src={logo} alt="Placeholder" />
      <div className="right-section">
        <div className="title">Interesting with This Item?</div>
        <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="button-container">
          <div className="buy-button">Buy on OpenSea</div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Trending;
