import { useEffect, useMemo, useState } from "react";

export const useForm = (initialState, validatedFields = {}) => {
  const [inputValues, setInputValue] = useState(initialState);
  const [validationValues, setValidationValues] = useState({});

  useEffect(() => {
    validationFields();
  }, [inputValues]);

  useEffect(() => {
    setInputValue(initialState);
  }, [initialState]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setInputValue({
      ...inputValues,
      [name]: value,
    });
  };

  const onResetForm = () => setInputValue(initialState);

  const isFormValid = useMemo(() => {
    for (const fieldForm of Object.keys(validationValues)) {
      if (validationValues[fieldForm] !== null) return false;
    }
    return true;
  }, [validationValues]);

  const validationFields = () => {
    const helper = {};
    for (let field of Object.keys(validatedFields)) {
      const [fn, errorMessage] = validatedFields[field];
      helper[`${field}Valid`] = fn(inputValues[field]) ? errorMessage : null;
    }

    setValidationValues(helper);
  };

  return {
    inputValues,
    validationValues,
    ...inputValues,
    ...validationValues,
    isFormValid,
    handleChange,
    onResetForm,
  };
};
