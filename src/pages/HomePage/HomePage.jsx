import React from "react";
import Blog from "../../containers/Blog/Blog";
import CTA from "../../containers/CTA/CTA";
import Features from "../../containers/Features/Features";
import Footer from "../../containers/Footer/Footer";
import Header from "../../containers/Header/Header";
import Offer from "../../containers/Offer/Offer";
import './HomePage.css'

const HomePage = () => {
  return (
    <div className="home__container">
      <Header />
      <Features/>
      <CTA/>
      {/* <Offer/> */}
      <Blog/>
      <Footer/>
    </div>
  );
};

export default HomePage;
