import * as React from "react";
import { graphql } from "gatsby";
import Seo from "../components/SEO";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Faq from "../components/FAQ";
import Footer from "../components/Footer";
import "../styles/style.css";
import ShareExperience from "../components/ShareExperience";

const IndexPage = ({ data }) => {
  return (
    <div>
      <Seo></Seo>
      <Header></Header>
      <main>
        <Hero></Hero>
        <About></About>
        <HowItWorks></HowItWorks>
        <Services></Services>
        <Testimonials></Testimonials>
        <ShareExperience></ShareExperience>
        <div className="contact-faq">
          <div className="contact-faq-content">
            <Contact></Contact>
            <Faq></Faq>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default IndexPage;
