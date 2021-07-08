import * as React from "react";
import { Helmet } from "react-helmet";

const SEO = () => {
  return (
    <Helmet>
      {/* General tags */}
      <title>Relocation Consultant | João Santos</title>
      <meta name="description" content="" />
      <meta name="image" content="" />

      {/* OpenGraph tags */}
      <meta property="og:url" content="" />
      <meta property="og:title" content="" />
      <meta property="og:description" content="" />
      <meta property="og:image" content="" />
      <meta property="fb:app_id" content="" />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="" />
      <meta name="twitter:title" content="" />
      <meta name="twitter:description" content="" />
      <meta name="twitter:image" content="" />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
        integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
        crossorigin="anonymous"
      ></link>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Lato&display=swap"
        rel="stylesheet"
      ></link>
      <script
        src="https://www.google.com/recaptcha/api.js"
        async
        defer
      ></script>
    </Helmet>
  );
};

export default SEO;
