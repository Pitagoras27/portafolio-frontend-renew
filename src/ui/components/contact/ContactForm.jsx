import { Alert, Grid } from "@mui/material";
import { Buttons, InputField, Loader } from "../../";

export const ContactForm = ({
  loading,
  errorMessage,
  initialValue,
  name,
  email,
  interests,
  messageUser,
  nameValid,
  emailValid,
  interestsValid,
  messageUserValid,
  handleChange,
  onResetForm,
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
              noValidate
            >
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <InputField
                    label="Name"
                    name="name"
                    type="text"
                    multiline={false}
                    value={name}
                    autoComplete="off"
                    handleChange={handleChange}
                    helperText={initialValue && nameValid}
                    error={!!nameValid && initialValue}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputField
                    label="email"
                    name="email"
                    type="email"
                    multiline={false}
                    value={email}
                    autoComplete="off"
                    handleChange={handleChange}
                    helperText={initialValue && emailValid}
                    error={!!emailValid && initialValue}
                    fullWidth
                  />
                </Grid>
              </Grid>

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

              <Buttons title="Send a message" onResetForm={onResetForm} />
            </form>
          </>
        )
      }
    </>
  )
}