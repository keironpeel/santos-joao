import * as React from "react";

const Faq = () => {
  var faqOneOpen = false;
  var faqTwoOpen = false;
  var faqThreeOpen = false;

  function css(element, style) {
    for (const property in style) element.style[property] = style[property];
  }

  function toggleFaqOne() {
    faqOneOpen = !faqOneOpen;
    const faqOne = document.querySelector("#faqOne");
    const faqOnePlus = document.querySelector("#faqOnePlus");
    const faqOneMinus = document.querySelector("#faqOneMinus");
    if (faqOneOpen) {
      css(faqOne, {
        display: "block",
      });
      css(faqOnePlus, {
        display: "none",
      });
      css(faqOneMinus, {
        display: "block",
      });
    } else {
      css(faqOne, {
        display: "none",
      });
      css(faqOneMinus, {
        display: "none",
      });
      css(faqOnePlus, {
        display: "block",
      });
    }
  }

  function toggleFaqTwo() {
    faqTwoOpen = !faqTwoOpen;
    const faqTwo = document.querySelector("#faqTwo");
    const faqTwoPlus = document.querySelector("#faqTwoPlus");
    const faqTwoMinus = document.querySelector("#faqTwoMinus");
    if (faqTwoOpen) {
      css(faqTwo, {
        display: "block",
      });
      css(faqTwoPlus, {
        display: "none",
      });
      css(faqTwoMinus, {
        display: "block",
      });
    } else {
      css(faqTwo, {
        display: "none",
      });
      css(faqTwoMinus, {
        display: "none",
      });
      css(faqTwoPlus, {
        display: "block",
      });
    }
  }

  function toggleFaqThree() {
    faqThreeOpen = !faqThreeOpen;
    const faqThree = document.querySelector("#faqThree");
    const faqThreePlus = document.querySelector("#faqThreePlus");
    const faqThreeMinus = document.querySelector("#faqThreeMinus");
    if (faqThreeOpen) {
      css(faqThree, {
        display: "block",
      });
      css(faqThreePlus, {
        display: "none",
      });
      css(faqThreeMinus, {
        display: "block",
      });
    } else {
      css(faqThree, {
        display: "none",
      });
      css(faqThreeMinus, {
        display: "none",
      });
      css(faqThreePlus, {
        display: "block",
      });
    }
  }

  return (
    <section className="FAQ" id="faq">
      <h2>FAQ</h2>
      <div className="faqs">
        <div className="faq-container">
          <div className="faq-question">
            <div>What do I need a NIF for?</div>
            <div onClick={() => toggleFaqOne()} role="tab">
              <i class="fas fa-plus" id="faqOnePlus"></i>
              <i class="fas fa-minus" id="faqOneMinus"></i>
            </div>
          </div>
          <div className="faq-answer" id="faqOne">
            If you are planing to relocate to Portugal, the Portuguese Taxpayer
            Number, or NIF, will come very handy, or rather essential. Having a
            NIF number allows you to open bank accounts, make lease contracts,
            it’s a step towards access to National Health System and more.
            <br />
            <br /> In fact you may apply for a NIF number without even
            establishing your residence here, if it suits you, tax-wise. That
            also means you don’t have to be in the country to get a NIF
            beforehand. Since you are not yet a resident in the country, you’ll
            need someone else to apply for the Taxpayer number on your behalf,
            they’ll be your Fiscal Representative.
            <br />
            <br />
            Did you know? Portuguese banks are now offering temporary NIFs.
            Nevertheless, you’ll always end up in need of a permanent NIF
            number.
            <a href="#contact">Get your NIF</a>
          </div>
        </div>
        <div className="faq-container">
          <div className="faq-question">
            <div>Which Visa is for me?</div>
            <div onClick={() => toggleFaqTwo()} role="tab">
              <i class="fas fa-plus" id="faqTwoPlus"></i>
              <i class="fas fa-minus" id="faqTwoMinus"></i>
            </div>
          </div>
          <div className="faq-answer" id="faqTwo">
            There are different types of visa, depending on your circumstances.
            From short term visas to long term (National) visas, there’s a
            variety that might apply to your case, especifically. Are you
            looking to Relocate to Portugal for studies, work, tourism or are
            you looking into living here off of your personal revenue?
            <a href="#contact">Tell me about it here</a>
          </div>
        </div>
        <div className="faq-container">
          <div className="faq-question">
            <div>Is Portugal tax-free?</div>
            <div onClick={() => toggleFaqThree()} role="tab">
              <i class="fas fa-plus" id="faqThreePlus"></i>
              <i class="fas fa-minus" id="faqThreeMinus"></i>
            </div>
          </div>
          <div className="faq-answer" id="faqThree">
            No. There is, however, a reduced tax frame with the NHR
            (Non-Habitual Residence).
            <a href="#contact">Click here for more</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
