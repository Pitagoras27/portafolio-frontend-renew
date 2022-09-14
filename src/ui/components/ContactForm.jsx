import { Buttons, InputField } from "../";
import { validateEmail } from "../../helpers";
import { useForm } from "../../hooks/useForm";

const initialStateForm = {
  email: '',
  userName: '',
  message: ''
}

const validatedData = {
  email: [
    (value) => !validateEmail(value),
    'the mail is not correct'
  ],
  userName: [
    (value) => value.length <= 5,
    'password should have 5 characters minimum'
  ]
}

export const ContactForm = () => {
  const {
    email,
    userName,
    message,
    emailValid,
    userNameValid,
    handleChange
  } = useForm(initialStateForm, validatedData);

  const onSubmit = () => {}

  return (
    <form
      onSubmit={onSubmit}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <InputField
        label="Name"
        name="userName"
        type="text"
        multiline={false}
        value={userName}
        autoComplete="off"
        handleChange={handleChange}
        // helperText={initialValidation && textValid}
        // error={!!emailValid && initialValidation}
        fullWidth
      />

      <InputField
        label="Email"
        name="email"
        type="email"
        multiline={false}
        value={email}
        autoComplete="off"
        handleChange={handleChange}
        // helperText={initialValidation && textValid}
        // error={!!emailValid && initialValidation}
        fullWidth
      />

      <InputField
        label="Message"
        name="message"
        multiline={true}
        value={email}
        autoComplete="off"
        handleChange={handleChange}
        // helperText={initialValidation && textValid}
        // error={!!emailValid && initialValidation}
        fullWidth
        minRows={3}
      />

      <Buttons title="Send a message" />
    </form>
  )
}