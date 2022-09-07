import {
  Button,
  Grid,
  Link,
  TextField,
  Typography
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { AuthLayout } from "./AuthLayout";

const formLoginData = {
  email: "",
  password: "",
};

export const LoginPage = () => {
  const { email, password, handleChange } = useForm(formLoginData);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('in onSubmit!')
  }

  return (
    <AuthLayout title="Login">
      <form
        aria-label="submit-form"
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              name="email"
              type="email"
              value={email}
              placeholder="correo@google.com"
              autoComplete="off"
              onChange={handleChange}
              fullWidth
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              name="password"
              type="password"
              inputProps={{
                'data-testid': 'password'
              }}
              value={password}
              placeholder="Password"
              autoComplete="off"
              onChange={handleChange}
              fullWidth
            />
          </Grid>
        </Grid>

        {/* <Grid// TODO: Errors management 
          item
          xs={12}
          sx={{ mb: 2, mt: 1 }}
          display={!!errorMessage ? "" : "none"}
        >
          <Alert severity="error">{errorMessage}</Alert>
        </Grid> */}

        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={12} sm={6}>
            <Button
              type="submit"
              variant="contained"
              // disabled={isAuthenticated} // TODO: state of button
              fullWidth
            >
              Login
            </Button>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              <Typography sx={{ mt: 2 }}>Create Account</Typography>
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}