import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function Navbar() {
  const pages = [
    { name: "Home", link: "/", id: 1 },
    { name: "Models", link: "/models", id: 2 },
    { name: "Electro-Cars", link: "/electro-cars", id: 3 },
    { name: "Services", link: "/services", id: 4 },
    { name: "Admin-Panel", link: "/admin", id: 5 },
  ];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          {pages.map((page) => (
            <Link to={page.link} key={page.id}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {page.name}
              </Typography>
            </Link>
          ))}

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
