import React from "react";
import "./newsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsletter_parent">
      <div className="newsletter__section">
        <div className="newsletter__newsletter">Newsletter</div>
        <div className="newsletter__heading">
          You Do Not Want to Miss Out on this!
        </div>
        <div className="newsletter__paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <form className="newsletter__form">
          <input
            type="email"
            placeholder="Your email"
            className="newsletter__input"
          />
          <button type="submit" className="newsletter__button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
