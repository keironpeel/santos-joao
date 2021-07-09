import * as React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer__text">
          <div className="footer__logo">João Santos</div>
        </div>
        <div className="footer__links">
          <div className="footer__social-icons">
            <a href="https://www.facebook.com/luisjoaorelocationconsultants">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-feitosa-67a14b19a/">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <div className="footer__navigation">
            <a href="#hero">Home</a>
            <a href="#about">About me</a>
            <a href="#how-it-works">How it works</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact me</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </div>
      <div className="footer__copyright">João Santos © 2021</div>
    </footer>
  );
};

export default Footer;
