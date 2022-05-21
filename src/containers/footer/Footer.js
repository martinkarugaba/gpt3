import React from 'react';
import gpt3Logo from '../../assets/logo.svg'
import './footer.scss';

const Footer = () => {
  return (
    <section className="footer section__padding">
      <div className="footer__heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
      </div>

      <div className="footer__btn">
        <p>Request Early Access</p>
      </div>

      <div className="footer__content">
        <div className="footer__logo">
          <img src={gpt3Logo} alt="logo" />
          <address>
            Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
          </address>
        </div>

        <div className="footer__links">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>

        <div className="footer__links">
          <h4>Company</h4>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>

        <div className="footer__links">
          <h4>Get In Touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>

      <div className="footer__copyright">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
