import { useState } from "react";
import { Buttons, InputField } from "../";
import { useForm } from "../../hooks/useForm";

const initialStateForm = {
  interests: '',
  message: ''
}

const validatedData = {
  interests: [
    (value) => value.length <= 1,
    'What is your interest in me'
  ],
  message: [
    (value) => value.length <= 1,
    'Write a short message'
  ]
}

export const ContactForm = () => {
  const {
    interests,
    message,
    interestsValid,
    messageValid,
    handleChange
  } = useForm(initialStateForm, validatedData);

  const [initialValue, setInitialValue] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setInitialValue(true)
  }

  return (
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
        name="message"
        multiline={true}
        value={message}
        autoComplete="off"
        handleChange={handleChange}
        helperText={initialValue && messageValid}
        error={!!messageValid && initialValue}
        fullWidth
        minRows={3}
      />

      <Buttons title="Send a message" />
    </form>
  )
}