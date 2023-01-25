import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="header__title">
        <h1>INSPIRATION FOR THE FUTURE</h1>
        <button onClick={() => navigate("/electro-cars")}>
          More
        </button>
      </div>
    </div>
  );
};

export default Header;
