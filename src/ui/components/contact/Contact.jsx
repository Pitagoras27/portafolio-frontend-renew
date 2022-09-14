import { useState } from "react";
import { useContactStore, useForm } from "../../../hooks";
import { ContactForm } from "./ContactForm";

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

export const Contact = () => {
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
    <ContactForm
      loading={loading}
      errorMessage={errorMessage}
      interestsValid={interestsValid}
      messageUserValid={messageUserValid}
      handleChange={handleChange}
      initialValue={initialValue}
      messageUser={messageUser}
      interests={interests}
      onSubmit={onSubmit}
    />
  )
}