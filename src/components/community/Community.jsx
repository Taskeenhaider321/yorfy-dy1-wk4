import React from "react";
import "./community.css";
import Avatar from "../../assets/Avatar.svg";
import more_horiz from "../../assets/more_horiz.svg";

const Community = () => {
  return (
    <div className="community__section">
      <div className="commuity__left">
        <div className="community__head">Community</div>
        <div className="community__heading">
          Join Our Community and Get Many Benefits
        </div>
        <div className="community__paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div>
          <button className="commmunity__button">Join Our Discord</button>
        </div>
      </div>
      <div className="community__right">
        <div className="community__right__rectangle">
          <img src={Avatar} alt="avator" />
          <div className="community__right__rectangle__text">
            <h5>ShooPharDhie</h5>
            <p>Last Online 2 Hour Ago</p>
          </div>
          <div className="community__right__rectangle__text__dot">
            <img src={more_horiz} alt="more_horiz" />
          </div>
        </div>
        <div className="community__right__rectangle community__right__second">
          <img src={Avatar} alt="avator" />
          <div className="community__right__rectangle__text">
            <h5>ShooPharDhie</h5>
            <p>Last Online 2 Hour Ago</p>
          </div>
          <div className="community__right__rectangle__text__dot">
            <img src={more_horiz} alt="more_horiz" />
          </div>
        </div>
        <div className="community__right__rectangle community__right__third">
          <img src={Avatar} alt="avator" />
          <div className="community__right__rectangle__text">
            <h5>ShooPharDhie</h5>
            <p>Last Online 2 Hour Ago</p>
          </div>
          <div className="community__right__rectangle__text__dot">
            <img src={more_horiz} alt="more_horiz" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
