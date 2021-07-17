module.exports = {
  siteMetadata: {
    title: "santos-joao",
    lang: "en",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `3nol2i9fofbd`,
        accessToken: `6mAYZEd3tabfDqMoua5vxWeQb02MgHF7WjbpxIgaxoU`,
      },
    },
    "gatsby-transformer-remark",
  ],
};
