import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Plain from "../components/Plain";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Plain />
      <Features />
      <Plain />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Home;
