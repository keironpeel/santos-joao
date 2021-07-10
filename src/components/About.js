import * as React from "react";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <div className="about__image"></div>
        <div className="about__text">
          <h2>Who am I?</h2>
          <p>
            As a foreigner myself, I know what a struggle it can be to get
            settled in a new country.
          </p>
          <p>
            I moved out of Salvador Brazil to Lisbon in 2017 to study Law at the
            local University. I wanted to combine my interests in law with the
            thrill, excitement and experiences of living abroad. But I soon
            noticed that dealing with foreign authorities can be quite a
            struggle, even for the most prepared person. That's how the idea for
            this platform started. I combined my knowledge of Portuguese law,
            language and my own personal experiences to assist you. From NIF &
            Visas to setting up a bank account and insurances quotes.{" "}
          </p>
          <p>Let me be your helping hand on your journey to Portugal!</p>
          <a href="#contact">Contact me</a>
        </div>
      </div>
    </section>
  );
};

export default About;
