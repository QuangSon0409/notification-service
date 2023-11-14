import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
// interface IUserInput {
//   email: string;
//   password: string;
// }

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log("login data", data.get("email"));
  };

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <>
      <Container component="main" maxWidth="sm">
        <Box
          sx={{
            boxShadow: 3,
            borderRadius: 2,
            px: 4,
            py: 6,
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // justifyContent: "center",
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: "700", mb: 2 }}
          >
            Sign In
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              id="email"
              label="Email Address"
              name="email"
              autoFocus
              fullWidth
              autoComplete="email"
              placeholder="nguyenvana@gmailcom"
              sx={{ mt: 3 }}
            ></TextField>
            <FormControl
              fullWidth
              variant="outlined"
              sx={{
                mt: 3,
              }}
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                required
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                label="password"
              ></OutlinedInput>
            </FormControl>
            <Button
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              sx={{ mt: 3 }}
            >
              Sign in
            </Button>
            <Grid
              container
              display="flex"
              justifyContent="space-between"
              mt={2}
            >
              <Grid item>
                <Link href="#" variant="body1">
                  Forgot Password
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body1">
                  {"Don't have an account? Signup"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Login;
