import React from "react";
import "./header.scss";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="header" id="home">
      <section className="header__content">
        <h1 className="gradient__text">
          Let’s Build Something amazing with GPT-3 <br/> OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing.
          Not thoughts all exercise blessing. Indulgence way
          everything joy alteration boisterous the attachment. Party
          we years to order allow asked of.
        </p>

        <div className="header__form">
          <input
            type="email"
            placeholder="Your Email Address"
            name=""
            id=""
          />
          <button type="button">Get Started</button>
        </div>

        <div className="header__people">
          <img src={people} alt="people" />
          <p>
            1,600 people requested access a visit in last 24 hours
          </p>
        </div>
      </section>
      <section className="header__image">
        <img src={ai} alt="ai" />
      </section>
    </div>
  );
};

export default Header;
