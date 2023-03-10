import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAuth } from "../../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function AuthForm() {
  const [hasAccount, setHasAccount] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [logInEmail, setLogInEmail] = React.useState("");
  const [logInPass, setLogInPass] = React.useState("");
  const { register, logIn, user } = useAuth();

  function clearRegisterInputs() {
    setEmail("");
    setPass("");
  }

  function clearSignInInputs() {
    setLogInEmail("");
    setLogInPass("");
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          {hasAccount ? (
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
          ) : (
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
          )}
          <Box component="form" noValidate sx={{ mt: 1 }}>
            {hasAccount ? (
              <>
                <TextField
                  onChange={(e) => setLogInEmail(e.target.value)}
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={logInEmail}
                />
                <TextField
                  onChange={(e) => setLogInPass(e.target.value)}
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={logInPass}
                />
              </>
            ) : (
              <>
                <TextField
                  onChange={(e) => setEmail(e.target.value)}
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                />
                <TextField
                  onChange={(e) => setPass(e.target.value)}
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={pass}
                />
              </>
            )}

            {hasAccount ? (
              <Button
                type="button"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => {
                  logIn(logInEmail, logInPass);
                  clearSignInInputs();
                }}
              >
                Sign In
              </Button>
            ) : (
              <Button
                type="button"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => {
                  register(email, pass);
                  clearRegisterInputs();
                }}
              >
                Sign Up
              </Button>
            )}
            <Grid
              onClick={() => setHasAccount(!hasAccount)}
              container
              justifyContent={"flex-end"}
            >
              <Link sx={{ cursor: "pointer" }}>
                <Grid item>
                  {hasAccount
                    ? "Don't have an account yet? Sign up"
                    : "Already have an account? Sign in"}
                </Grid>
              </Link>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
