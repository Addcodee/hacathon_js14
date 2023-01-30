import React from "react";
import { useNavigate } from "react-router-dom";
import "./CTA.css";

const CTA = () => {

  const navigate = useNavigate()

  return <div className="cta" id="cta">
    <div>
      <h2>GET THE BEST OFFER FROM OUR WEBSITE</h2>
      <button onClick={() => navigate('/models')}>Getting started</button>
    </div>
  </div>;
};

export default CTA;
