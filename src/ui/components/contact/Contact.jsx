import { useState } from "react";
import { validateEmail } from "../../../helpers";
import { useContactStore, useForm } from "../../../hooks";
import { ContactForm } from "./ContactForm";

const initialStateForm = {
  name: '',
  email: '',
  interests: '',
  messageUser: ''
}

const validatedData = {
  name: [
    (value) => value.length <= 1,
    'What is your name'
  ],
  email: [
    (value) => !validateEmail(value),
    'Add a valid email'
  ],
  interests: [
    (value) => value.length <= 1,
    'What is your interest in me'
  ],
  messageUser: [
    (value) => value.length <= 1,
    'Write a short message'
  ]
}

export const Contact = () => {
  const { loading, errorMessage, startSaveMessage } = useContactStore();

  const {
    handleChange,
    isFormValid,
    validationValues,
    onResetForm,
    inputValues
  } = useForm(initialStateForm, validatedData);

  const [initialValue, setInitialValue] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setInitialValue(true)

    if(isFormValid) {
      startSaveMessage({ ...inputValues });
    }
  }

  return (
    <ContactForm
      { ...validationValues }
      { ...inputValues }
      loading={loading}
      errorMessage={errorMessage}
      initialValue={initialValue}
      handleChange={handleChange}
      onSubmit={onSubmit}
      onResetForm={onResetForm}
    />
  )
}