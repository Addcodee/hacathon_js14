import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import "./navbar.css";
import { Badge, Icon } from "@mui/material";
import { useCart } from "../../context/CartContextProvider";
import { getCartsLength } from "../../helpers/functions";
import { auth } from "../../fire";
import { useAuth } from "../../context/AuthContextProvider";
import logo from "../../assets/logo.png";

const pages = [
  { name: "Home", link: "/", id: 1 },
  { name: "Models", link: "/models", id: 2 },
  { name: "Electro-Cars", link: "/electro-cars", id: 3 },
  { name: "Services", link: "/services", id: 4 },
  { name: "Admin-Panel", link: "/admin", id: 5 },
];

function Navbar() {
  const { addProductToCart } = useCart();
  const { user, logOut } = useAuth();

  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    setCount(getCartsLength);
  }, [addProductToCart]);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
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
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/2.jpg"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <Link to="/profile">
                <MenuItem
                  sx={{ color: "black" }}
                  onClick={handleCloseUserMenu}
                >
                  <Typography
                    textAlign="center"
                    sx={{ fontFamily: "Montserrat" }}
                  >
                    Profile
                  </Typography>
                </MenuItem>
              </Link>
              {user ? (
                <MenuItem
                  sx={{ color: "black" }}
                  onClick={() => {
                    handleCloseUserMenu();
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
                  <MenuItem
                    sx={{ color: "black" }}
                    onClick={handleCloseUserMenu}
                  >
                    <Typography
                      textAlign="center"
                      sx={{ fontFamily: "Montserrat" }}
                    >
                      Log In
                    </Typography>
                  </MenuItem>
                </Link>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
