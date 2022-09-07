import { useState } from "react";
import { AuthLayout, Buttons, InputField } from "../";
import { useForm } from "../../hooks/useForm";

const dataFormRegister = {
  displayName: '',
  email: '',
  password: '',
};

const validatedFields = {
  displayName: [
    (value, b) => !value.length >= 1,
    'The full name don\'t have empty',
  ],
  email: [(value) => !value.includes('@'), 'The email is not valid'],
  password: [
    (value) => !(value.length >= 6),
    'The password must have 6 characters minimun',
  ],
};

export const RegisterPage = () => {
  const {
    inputValue,
    displayName,
    email,
    password,
    handleChange,
    displayNameValid,
    emailValid,
    passwordValid,
    isFormValid,
  } = useForm(dataFormRegister, validatedFields);

  const [ initialValidation, setInitialValidation ] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Validation form
    setInitialValidation(true);

    // TODO: if all is correct update store
  };
  return (
    <AuthLayout title="Register">
      { initialValidation && 
        <h4 className="text-align-right mb-0">The form is {(isFormValid) ? "valid" : "incorrect"} </h4> }
      <form
        onSubmit={handleSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >

        <InputField
          label="Full Name"
          name="displayName"
          type="text"
          value={displayName}
          placeholder="correo@google.com"
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

        {/* <Grid item xs={12} display={!!errorMessage ? "" : "none"}> // TODO: Errors managment via store and backend
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
