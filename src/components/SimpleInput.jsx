import useForm from "../hooks/Forms/useForm";
import InputField from "./InputField";
import Validator from "./validators";

const SimpleInput = () => {
  const action = (formData) =>
    console.log("formData:\n" + JSON.stringify(formData));

  const [handleOnChange, handleOnSubmit, isTouched, isValid] = useForm(action, {
    name: { isValid: false },
    age: { isValid: false },
  });

  return (
    <form>
      <InputField
        id="name"
        name="name"
        type="text"
        label="Your Name"
        validators={[Validator.name]}
        isTouched={isTouched}
        onChange={handleOnChange}
      />
      <InputField
        id="age"
        name="age"
        type="number"
        label="Your Age"
        validationMessage="must be between 12 and 100"
        validators={[Validator.age]}
        isTouched={isTouched}
        onChange={handleOnChange}
      />
      <div className="form-actions">
        <button disabled={!isValid} onClick={handleOnSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
