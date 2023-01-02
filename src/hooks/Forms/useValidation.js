import { useEffect, useState } from "react";

const useValidation = ({ value, validators, isTouchedOut, onChange }) => {
  const [state, setState] = useState(value || "");
  const [isTouched, setIsTouched] = useState(false);

  const validate = (value) =>
    validators?.every((check) => check(value) === true) && value.trim() !== "";
  const isValid = validate(state);
  const isInvalid = !isValid && isTouched;

  const handleOnChange = (event) => {
    setState(event.target.value);
    onChange(event, validate(event.target.value));
  };

  const handleOnBlur = (event) => {
    setIsTouched(true);
  };

  useEffect(() => {
    setIsTouched(isTouchedOut);
  }, [isTouchedOut]);

  return [handleOnChange, handleOnBlur, state, isInvalid];
};

export default useValidation;
