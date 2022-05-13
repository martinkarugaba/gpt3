import React from "react";
import "./brand.scss";
import {
  google,
  slack,
  atlassian,
  dropbox,
  shopify,
} from "./imports";

const Brand = () => {
  return (
    <div className="brand section__padding">
      <div className="brand__item">
        <img src={google} alt="google" />
      </div>
      <div className="brand__item">
        <img src={slack} alt="slack" />
      </div>
      <div className="brand__item">
        <img src={atlassian} alt="atlassian" />
      </div>
      <div className="brand__item">
        <img src={dropbox} alt="dropbox" />
      </div>
      <div className="brand__item">
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  );
};

export default Brand;
