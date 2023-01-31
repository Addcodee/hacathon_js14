import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import "./navbar.css";
import { Badge } from "@mui/material";
import { useCart } from "../../context/CartContextProvider";
import { getCartsLength } from "../../helpers/functions";
import { useAuth } from "../../context/AuthContextProvider";
import logo from "../../assets/logo.png";
import { ADMIN } from "../../helpers/variables";

function Navbar() {
  const { addProductToCart } = useCart();
  const { user, logOut } = useAuth();

  const pages = [
    { name: "Home", link: "/", id: 1 },
    { name: "Models", link: "/models", id: 2 },
  ];

  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    setCount(getCartsLength);
  }, [addProductToCart]);

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ backgroundColor: "white" }}>
        <Toolbar disableGutters>
          <img
            src={logo}
            alt="error"
            style={{ width: "3em", marginRight: "1em" }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Montserrat",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              color: "black",
            }}
          >
            TULPAR
          </Typography>

          <Box
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <IconButton
              sx={{ color: "black" }}
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Link to={page.link} key={page.id}>
                  <MenuItem
                    sx={{ color: "black" }}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">
                      {page.name}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
              {user?.email === ADMIN ? (
                <Link to="/admin">
                  <MenuItem
                    sx={{ color: "black" }}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">
                      ADMIN PANEL
                    </Typography>
                  </MenuItem>
                </Link>
              ) : null}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Montserrat",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              color: "black",
              fontFamily: "Montserrat",
            }}
          >
            TULPAR
          </Typography>
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {pages.map((page) => (
              <Link to={page.link} key={page.id}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: "black",
                    display: "block",
                    fontFamily: "Montserrat",
                  }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
            {user?.email === ADMIN ? (
              <Link to="/admin">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: "black",
                    display: "block",
                    fontFamily: "Montserrat",
                  }}
                >
                  ADMIN PANEL
                </Button>
              </Link>
            ) : null}
          </Box>
          <Box
            sx={{
              flexGrow: 0.02,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Link to="/cart">
              <Badge color="error" badgeContent={count}>
                <HiShoppingCart className="nav__cart" />
              </Badge>
            </Link>
          </Box>

          {user ? (
            <MenuItem
              sx={{ color: "black" }}
              onClick={() => {
                logOut();
              }}
            >
              <Typography
                textAlign="center"
                sx={{ fontFamily: "Montserrat" }}
              >
                Log Out
              </Typography>
            </MenuItem>
          ) : (
            <Link to="/auth">
              <MenuItem sx={{ color: "black" }}>
                <Typography
                  textAlign="center"
                  sx={{ fontFamily: "Montserrat" }}
                >
                  Log In
                </Typography>
              </MenuItem>
            </Link>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
