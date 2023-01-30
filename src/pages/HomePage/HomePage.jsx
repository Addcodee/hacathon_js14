import React from "react";
import Blog from "../../containers/Blog/Blog";
import CTA from "../../containers/CTA/CTA";
import Features from "../../containers/Features/Features";
import Header from "../../containers/Header/Header";

const HomePage = () => {
  return (
    <div className="home__container">
      <Header />
      <Features/>
      <CTA/>
      {/* <Offer/> */}
      <Blog/>
    </div>
  );
};

export default HomePage;
