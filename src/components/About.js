import React from "react";
import { StaticQuery, graphql } from "gatsby";

export default function About() {
  return (
    <StaticQuery
      query={graphql`
        query AboutQuery {
          contentfulAbout {
            image {
              file {
                url
              }
            }
            title
            text {
              childMarkdownRemark {
                html
              }
            }
            buttonText
            buttonLink
          }
        }
      `}
      render={(data) => (
        <section className="about" id="about">
          <div className="about-content">
            <div className="about__image">
              <img src={data.contentfulAbout.image.file.url} alt="profile" />
            </div>
            <div className="about__text">
              <h2>{data.contentfulAbout.title}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.contentfulAbout.text.childMarkdownRemark.html,
                }}
              />
              <a href="#contact">{data.contentfulAbout.title}</a>
            </div>
          </div>
        </section>
      )}
    />
  );
}
