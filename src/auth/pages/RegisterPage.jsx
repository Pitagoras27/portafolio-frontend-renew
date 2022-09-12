// import { Alert, Grid } from "@mui/material";
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState } from "react";
import { AuthLayout, Buttons, InputField } from "../";
import { useForm } from "../../hooks/useForm";

const useStyles = makeStyles({
  styleHeader: {
    textAlign: 'center',
    marginBottom: 0,
    fontStyle: 'italic',
  }
});

const dataFormRegister = {
  displayName: '',
  email: '',
  password: '',
  password2: ''
};

export const RegisterPage = () => {
  const classes = useStyles();

  const validatedFields = {
    displayName: [
      (value, b) => !value.length >= 1,
      'The full name don\'t have empty',
    ],
    email: [(value) => !value.includes('@'), 'The email is not valid'],
    password: [
      (value) => !(value.length >= 5),
      'The password must have 5 characters minimun',
    ],
    password2: [
      (value) => !(value === password && value.length >= 5),
      'The password must be the same',
    ],
  };

  const {
    displayName,
    email,
    password,
    password2,
    handleChange,
    displayNameValid,
    emailValid,
    passwordValid,
    password2Valid,
    isFormValid,
  } = useForm(dataFormRegister, validatedFields);

  const [ initialValidation, setInitialValidation ] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setInitialValidation(true);

    if(isFormValid) console.log('All is correct, update store')

  };
  return (
    <AuthLayout title="Register">
      { initialValidation && 
        <Typography
          variant="subtitle1"
          className={classes.styleHeader}
        >
          The form is {(isFormValid) ? "valid" : "incorrect"}
        </Typography> }
      <form
        onSubmit={handleSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >

        <InputField
          label="Full Name"
          name="displayName"
          type="text"
          value={displayName}
          autoComplete="off"
          handleChange={handleChange}
          helperText={initialValidation && displayNameValid}
          error={!!displayNameValid && initialValidation}
          fullWidth
          />

        <InputField
          label="Correo"
          name="email"
          type="email"
          value={email}
          autoComplete="off"
          handleChange={handleChange}
          helperText={initialValidation && emailValid}
          error={!!emailValid && initialValidation}
          fullWidth
          />

        <InputField
          label="Password"
          name="password"
          type="password"
          value={password}
          autoComplete="off"
          handleChange={handleChange}
          helperText={initialValidation && passwordValid}
          error={!!passwordValid && initialValidation}
          fullWidth
        />

        <InputField
          label="Repeat your password"
          name="password2"
          type="password"
          value={password2}
          autoComplete="off"
          handleChange={handleChange}
          helperText={initialValidation && password2Valid}
          error={!!password2Valid && initialValidation}
          fullWidth
        />

        {/* <Grid item xs={12} display={!!errorMessage ? "" : "none"}>
          <Alert severity="error">{errorMessage}</Alert>
        </Grid> */}

        <Buttons
          title="Register"
          linkTitle="You have an Account"
          path="/auth/login"
        />
      </form>
    </AuthLayout>
  );
};
