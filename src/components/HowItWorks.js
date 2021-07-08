import * as React from "react";

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="how-it-works-content">
        <h2>How it works</h2>
        <div className="how-it-works__process">
          <div className="process__step">
            <div className="process__step-number">1</div>
            <div>Get in touch and discuss your plans</div>
          </div>
          <div className="process__divider">
            <div></div>
          </div>
          <div className="process__step">
            <div className="process__step-number">2</div>
            <div>Decide which services are necessary</div>
          </div>
          <div className="process__divider">
            <div></div>
          </div>
          <div className="process__step">
            <div className="process__step-number">3</div>
            <div>Get your quote</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
