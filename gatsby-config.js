module.exports = {
  siteMetadata: {
    title: "santos-joao",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-CWED9V677T",
        head: false,
        enableWebVitalsTracking: true,
      },
    },
  ],
};
