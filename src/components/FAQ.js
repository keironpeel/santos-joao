import * as React from "react";
import { StaticQuery, graphql } from "gatsby";

export default function Faq() {
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
    <StaticQuery
      query={graphql`
        query FaqQuery {
          contentfulFaq {
            title
            question1
            answer1 {
              childMarkdownRemark {
                html
              }
            }
            button1Text
            button1Link
            question2
            answer2 {
              childMarkdownRemark {
                html
              }
            }
            button2Text
            button2Link
            question3
            answer3 {
              childMarkdownRemark {
                html
              }
            }
            button3Text
            button3Link
          }
        }
      `}
      render={(data) => (
        <section className="FAQ" id="faq">
          <h2>{data.contentfulFaq.title}</h2>
          <div className="faqs">
            <div className="faq-container">
              <div className="faq-question" id="faqnif">
                <div>{data.contentfulFaq.question1}</div>
                <div onClick={() => toggleFaqOne()} role="rowheader">
                  <i className="fas fa-plus" id="faqOnePlus"></i>
                  <i className="fas fa-minus" id="faqOneMinus"></i>
                </div>
              </div>
              <div className="faq-answer" id="faqOne">
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.contentfulFaq.answer1.childMarkdownRemark.html,
                  }}
                />
                <a href={data.contentfulFaq.button1Link}>
                  {data.contentfulFaq.button1Text}
                </a>
              </div>
            </div>
            <div className="faq-container">
              <div className="faq-question">
                <div>{data.contentfulFaq.question2}</div>
                <div onClick={() => toggleFaqTwo()} role="rowheader">
                  <i className="fas fa-plus" id="faqTwoPlus"></i>
                  <i className="fas fa-minus" id="faqTwoMinus"></i>
                </div>
              </div>
              <div className="faq-answer" id="faqTwo">
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.contentfulFaq.answer2.childMarkdownRemark.html,
                  }}
                />
                <a href={data.contentfulFaq.button2Link}>
                  {data.contentfulFaq.button2Text}
                </a>
              </div>
            </div>
            <div className="faq-container">
              <div className="faq-question">
                <div>{data.contentfulFaq.question3}</div>
                <div onClick={() => toggleFaqThree()} role="rowheader">
                  <i className="fas fa-plus" id="faqThreePlus"></i>
                  <i className="fas fa-minus" id="faqThreeMinus"></i>
                </div>
              </div>
              <div className="faq-answer" id="faqThree">
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.contentfulFaq.answer3.childMarkdownRemark.html,
                  }}
                />
                <a href={data.contentfulFaq.button3Link}>
                  {data.contentfulFaq.button3Text}
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
    />
  );
}
