import { Alert, Grid } from "@mui/material";
import { useState } from "react";
import { Buttons, InputField } from "../";
import { useContactStore, useForm } from "../../hooks";
import { Loader } from "../../ui";

const initialStateForm = {
  interests: '',
  messageUser: ''
}

const validatedData = {
  interests: [
    (value) => value.length <= 1,
    'What is your interest in me'
  ],
  messageUser: [
    (value) => value.length <= 1,
    'Write a short message'
  ]
}

export const ContactForm = () => {
  const { loading, errorMessage, startSaveMessage } = useContactStore(); 
  const {
    interests,
    messageUser,
    interestsValid,
    messageUserValid,
    handleChange,
    isFormValid
  } = useForm(initialStateForm, validatedData);

  const [initialValue, setInitialValue] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setInitialValue(true)

    if(isFormValid) {
      startSaveMessage({ interests, messageUser });
    }
  }

  return (
    <>
      {
        loading
          ? (
            <Loader className='primaryColorTheme' />
          )
          : (
            <>
              <Grid
                item
                xs={12}
                sx={{ mb: 2, mt: 2 }}
                display={!!errorMessage ? "" : "none"}
              >
                <Alert severity="error">{errorMessage}</Alert>
              </Grid>

              <form
                onSubmit={onSubmit}
                className="animate__animated animate__fadeIn animate__faster"
              >
                <InputField
                  label="Subject"
                  name="interests"
                  type="text"
                  multiline={false}
                  value={interests}
                  autoComplete="off"
                  handleChange={handleChange}
                  helperText={initialValue && interestsValid}
                  error={!!interestsValid && initialValue}
                  fullWidth
                />

                <InputField
                  label="Message"
                  name="messageUser"
                  multiline={true}
                  value={messageUser}
                  autoComplete="off"
                  handleChange={handleChange}
                  helperText={initialValue && messageUserValid}
                  error={!!messageUserValid && initialValue}
                  fullWidth
                  minRows={3}
                />

                <Buttons title="Send a message" />
              </form>
            </>
          )
      }
    </>
  )
}