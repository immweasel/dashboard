import { useState, useCallback, ChangeEvent } from 'react';

interface FormValues {
  [key: string]: string;
}

interface ErrorMessage {
  [key: string]: string;
}

interface ValidationResult {
  inputValues: FormValues;
  errMessage: ErrorMessage;
  isValid: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  resetForm: () => void;
  setInputValues: React.Dispatch<React.SetStateAction<FormValues>>;
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
}

const useValidationsForms = (initialValues: FormValues = {}): ValidationResult => {
  const [inputValues, setInputValues] = useState<FormValues>(initialValues);
  const [errMessage, setErrMessage] = useState<ErrorMessage>({});
  const [isValid, setIsValid] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputValues((prevInputValues) => ({ ...prevInputValues, [name]: value }));
    setErrMessage((prevErrMessage) => ({
      ...prevErrMessage,
      [name]: e.target.validationMessage,
    }));
    setIsValid(e.target.closest('form')?.checkValidity() || false);
  };

  const resetForm = useCallback(() => {
    setInputValues({});
    setErrMessage({});
    setIsValid(false);
  }, []);

  return {
    inputValues,
    errMessage,
    isValid,
    handleChange,
    resetForm,
    setInputValues,
    setIsValid,
  };
};

export default useValidationsForms;
