import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatIsGPT3.scss";

const WhatIsGPT3 = () => {
  return (
    <section className="whatIsGPT3 section__margin">
      <div className="whatIsGPT3__featureContainer">
        <Feature
          title="What is GPT-3"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </div>
      <div className="whatIsGPT3__heading">
        <h2 className="gradient__text">
          The possibilities are beyond your imagination
        </h2>
        <p>Explore The Library</p>
      </div>
      <section className="feature__container">
        <Feature
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
        />
        <Feature
          title="Knowledgebase"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
        <Feature
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
      </section>
    </section>
  );
};

export default WhatIsGPT3;
