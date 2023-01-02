import { useState, useReducer } from "react";

const formReducer = (state, event) => ({
  ...state,
  [event.name]: { value: event.value, isValid: event.isValid },
});

const useForm = (action, initStateOrFieldNames) => {
  // if an Array transform field names into formData {"filedName": {isValid: false}, ...}
  if (initStateOrFieldNames instanceof Array) {
    initStateOrFieldNames = initStateOrFieldNames?.reduce((acc, curr) => ({
      [curr]: { isValid: false },
    }));
  }

  const [formData, setFormData] = useReducer(
    formReducer,
    initStateOrFieldNames || {}
  );
  const [isTouched, setIsTouched] = useState(false);

  let isFormValid = Object.values(formData).every(
    (field) => field.isValid === true
  );

  const onChange = (event, isValid) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
      isValid: isValid,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    setIsTouched(true);

    if (!isFormValid) {
      return;
    }

    action(formData);

    setIsTouched(false);
  };

  return [onChange, onSubmit, isTouched, isFormValid];
};

export default useForm;
