import React from "react";
import Footer from "./containers/Footer/Footer";
import Navbar from "./containers/Navbar/Navbar";
import MainRoutes from "./routes/MainRoutes";

const App = () => {

  return (
    <>
      <Navbar />
      <MainRoutes />
      <Footer/>
    </>
  );
};

export default App;
