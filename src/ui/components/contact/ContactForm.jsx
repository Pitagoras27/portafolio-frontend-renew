import { Alert, Grid } from "@mui/material";
import { Buttons, InputField, Loader } from "../../";

export const ContactForm = ({
  loading,
  errorMessage,
  interestsValid,
  messageUserValid,
  handleChange,
  initialValue,
  messageUser,
  interests,
  onSubmit
}) => {
  return (
    <>
      {
        loading ?
        (
          <Loader className='primaryColorTheme' />
        ) :
        (
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