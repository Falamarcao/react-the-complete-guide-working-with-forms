import { useState, useReducer } from "react";
import InputField from "./InputField";

const formReducer = (state, event) => ({
  ...state,
  [event.name]: { value: event.value, isValid: event.isValid },
});

const SimpleInput = (props) => {
  const [formData, setFormData] = useReducer(formReducer, {
    name: { isValid: false },
    age: { isValid: false },
  });
  const [isTouched, setIsTouched] = useState(false);

  let formIsValid = Object.values(formData).every(
    (field) => field.isValid === true
  );

  const handleOnChange = (event, isValid) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
      isValid: isValid,
    });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    setIsTouched(true);

    if (!formIsValid) {
      return;
    }

    console.log("formData:\n" + JSON.stringify(formData));

    setIsTouched(false);
  };

  const nameValidation = [(value) => value.trim().length > 5];

  const ageValidation = [
    (value) => {
      const n = Number(value);
      return n > 12 && n < 101;
    },
  ];

  return (
    <form>
      <InputField
        id="name"
        name="name"
        type="text"
        label="Your Name"
        validation={nameValidation}
        isTouched={isTouched}
        onChange={handleOnChange}
      />
      <InputField
        id="age"
        name="age"
        type="number"
        label="Your Age"
        validationMessage="must be between 12 and 100"
        validation={ageValidation}
        isTouched={isTouched}
        onChange={handleOnChange}
      />
      <div className="form-actions">
        <button disabled={!formIsValid} onClick={handleOnSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
