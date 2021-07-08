import * as React from "react";

const Header = () => {
  var menuOpen = false;

  function css(element, style) {
    for (const property in style) element.style[property] = style[property];
  }

  function toggleNavigation() {
    menuOpen = !menuOpen;
    const nav = document.querySelector(".mobile-navigation");
    if (menuOpen) {
      css(nav, {
        display: "flex",
        "flex-direction": "column",
        "align-items": "center",
      });
    } else {
      css(nav, {
        display: "none",
      });
    }
  }

  return (
    <header>
      <div className="header__links">
        <div className="header__links-content">
          <div>
            <a href="https://www.facebook.com/luisjoaorelocationconsultants">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-feitosa-67a14b19a/">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <div>
            <a href="mailto:info@santosjoao.com">info@santosjoao.com</a>
          </div>
        </div>
      </div>
      <div className="header__main">
        <div className="header__main-content">
          <div className="header__logo">JS</div>
          <nav>
            <a href="#">Home</a>
            <a href="#">About me</a>
            <a href="#">How it works</a>
            <a href="#">Testimonials</a>
            <a href="#">Contact me</a>
            <a href="#">FAQ</a>
          </nav>
          <div
            className="header__menu-toggle"
            onClick={() => toggleNavigation()}
          >
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </div>
      <div className="mobile-navigation">
        <a href="#">Home</a>
        <a href="#">About me</a>
        <a href="#">How it works</a>
        <a href="#">Testimonials</a>
        <a href="#">Contact me</a>
        <a href="#">FAQ</a>
      </div>
    </header>
  );
};

export default Header;
