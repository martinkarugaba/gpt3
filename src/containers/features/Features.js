import React from "react";
import { Feature } from "../../components";
import "./features.scss";
import { featuresData } from "./featuresData";

const Features = () => {
  return (
    <div className="features__section section__padding" id="features">
      <div className="features__heading">
        <h2 className="gradient__text">
          The future is now and you just need to realize It. Step into the
          Future Today & Make it Happen.
        </h2>
        <p>Request Early Access to Get Started</p>
      </div>
      <section className="features__container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </section>
    </div>
  );
};

export default Features;
