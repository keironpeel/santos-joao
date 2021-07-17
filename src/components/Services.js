import React from "react";
import { StaticQuery, graphql } from "gatsby";

export default function Services() {
  return (
    <StaticQuery
      query={graphql`
        query servicesQuery {
          contentfulServices {
            sectionTitle
            package1Title
            package1Includes {
              childMarkdownRemark {
                html
              }
            }
            package1Description {
              childMarkdownRemark {
                html
              }
            }
            package1ButtonText
            package1ButtonUrl
            package2Title
            package2Includes {
              childMarkdownRemark {
                html
              }
            }
            package2Description {
              childMarkdownRemark {
                html
              }
            }
            package2ButtonText
            package2ButtonUrl
            package3Title
            package3Includes {
              childMarkdownRemark {
                html
              }
            }
            package3Description {
              childMarkdownRemark {
                html
              }
            }
            package3ButtonText
            package3ButtonUrl
            sectionButtonText
            sectionButtonUrl
          }
        }
      `}
      render={(data) => (
        <section className="services">
          <div className="services-content">
            <h2>{data.contentfulServices.sectionTitle}</h2>
            <div className="services__grid">
              <div>
                <div>
                  <h3>{data.contentfulServices.package1Title}</h3>
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        data.contentfulServices.package1Includes
                          .childMarkdownRemark.html,
                    }}
                  />
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        data.contentfulServices.package1Description
                          .childMarkdownRemark.html,
                    }}
                  />
                </div>
                <a href={data.contentfulServices.package1ButtonUrl}>
                  {data.contentfulServices.package1ButtonText}
                </a>
              </div>
              <div>
                <div>
                  <h3>{data.contentfulServices.package2Title}</h3>
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        data.contentfulServices.package2Includes
                          .childMarkdownRemark.html,
                    }}
                  />
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        data.contentfulServices.package2Description
                          .childMarkdownRemark.html,
                    }}
                  />
                </div>
                <a href={data.contentfulServices.package2ButtonUrl}>
                  {data.contentfulServices.package2ButtonText}
                </a>
              </div>
              <div className="span-2">
                <div>
                  <h3>{data.contentfulServices.package3Title}</h3>
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        data.contentfulServices.package3Includes
                          .childMarkdownRemark.html,
                    }}
                  />
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        data.contentfulServices.package3Description
                          .childMarkdownRemark.html,
                    }}
                  />
                </div>
                <a href={data.contentfulServices.package3ButtonUrl}>
                  {data.contentfulServices.package3ButtonText}
                </a>
              </div>
            </div>
            <a href={data.contentfulServices.sectionButtonUrl}>
              {data.contentfulServices.sectionButtonText}
            </a>
          </div>
        </section>
      )}
    />
  );
}
