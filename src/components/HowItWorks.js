import * as React from "react";
import { StaticQuery, graphql } from "gatsby";

export default function HowItWorks() {
  return (
    <StaticQuery
      query={graphql`
        query HowItWorksQuery {
          contentfulHowItWorks {
            title
            step1
            step2
            step3
          }
        }
      `}
      render={(data) => (
        <section className="how-it-works" id="how-it-works">
          <div className="how-it-works-content">
            <h2>{data.contentfulHowItWorks.title}</h2>
            <div className="how-it-works__process">
              <div className="process__step">
                <div className="process__step-number">1</div>
                <div>{data.contentfulHowItWorks.step1}</div>
              </div>
              <div className="process__divider">
                <div></div>
              </div>
              <div className="process__step">
                <div className="process__step-number">2</div>
                <div>{data.contentfulHowItWorks.step2}</div>
              </div>
              <div className="process__divider">
                <div></div>
              </div>
              <div className="process__step">
                <div className="process__step-number">3</div>
                <div>{data.contentfulHowItWorks.step3}</div>
              </div>
            </div>
          </div>
        </section>
      )}
    />
  );
}
