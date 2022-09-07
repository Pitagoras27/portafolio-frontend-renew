import { useState } from "react";
import { AuthLayout, Buttons, InputField } from "../";
import { useForm } from "../../hooks/useForm";

const validatedData = {
  email: [
    (value) => !value && !value.includes('@'),
    'the mail is not correct'
  ],
  password: [
    (value) => value.length <= 5,
    'password should have 5 characters minimum'
  ]
}

const formLoginData = {
  email: '',
  password: '',
};

export const LoginPage = () => {
  const { email, password, handleChange, emailValid, passwordValid } = useForm(formLoginData, validatedData);
  const onSubmit = (e) => {
    e.preventDefault();

    setInitialValidation(true);
  }
  const [initialValidation, setInitialValidation] = useState(false);
  return (
    <AuthLayout title="Login">
      <form
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <InputField
          label="Correo"
          name="email"
          type="email"
          value={email}
          placeholder="correo@google.com"
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
          placeholder="Password"
          autoComplete="off"
          handleChange={handleChange}
          helperText={initialValidation && passwordValid}
          error={!!passwordValid && initialValidation}
          fullWidth
        />

        {/* <Grid// TODO: Errors management 
          item
          xs={12}
          sx={{ mb: 2, mt: 1 }}
          display={!!errorMessage ? "" : "none"}
        >
          <Alert severity="error">{errorMessage}</Alert>
        </Grid> */}

        <Buttons
          title="Login"
          linkTitle="Create Account"
          path="/auth/register"
        />
      </form>
    </AuthLayout>
  )
}