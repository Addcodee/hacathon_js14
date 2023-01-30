import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  const pageRoutes = [
    { name: "Home", link: "/", id: 1 },
    { name: "Models", link: "/models", id: 2 },
    { name: "Electro-Cars", link: "/electro-cars", id: 3 },
    { name: "Services", link: "/services", id: 4 },
  ];
  const homePageRoutes = [
    { name: "Technology", link: "#features", id: 1 },
    { name: "Get Started", link: "#cta", id: 2 },
    { name: "Special offer", link: "#offer", id: 3 },
    { name: "Blog", link: "#blog", id: 4 },
  ];
  return (
    <div className="footer">
      <div>
        <ul className="footer__list-pages">
          {pageRoutes.map((route) => (
            <Link to={route.link} key={route.id}>
              <li>{route.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div>
        <ul className="footer__list-containers">
          {homePageRoutes.map((route) => (
            <li key={route.id}>
              <a href={route.link}>{route.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <Paper className="footer__end">
        <h2>THANK YOU</h2>
        <p>
          Проект был сделан Имангазы и Алибеком, спасибо большое за
          внимание!
        </p>
      </Paper>
    </div>
  );
};

export default Footer;
