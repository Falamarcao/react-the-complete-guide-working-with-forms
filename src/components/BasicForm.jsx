import useForm from "../hooks/Forms/useForm";
import InputField from "./InputField";
import Validator from "./validators";

const BasicForm = (props) => {
  const action = (formData) =>
    console.log("formData:\n" + JSON.stringify(formData));

  const [handleOnChange, handleOnSubmit, isTouched] = useForm(action, [
    "name",
    "last_name",
    "email",
  ]);

  return (
    <form>
      <InputField
        id="name"
        name="name"
        type="text"
        label="First Name"
        validators={[Validator.name]}
        isTouched={isTouched}
        onChange={handleOnChange}
      />
      <InputField
        id="last_name"
        name="last_name"
        type="text"
        label="Last Name"
        validators={[Validator.name]}
        isTouched={isTouched}
        onChange={handleOnChange}
      />
      <InputField
        id="email"
        name="email"
        type="text"
        label="E-Mail Address"
        validationMessage="must be a valid email address"
        validators={[Validator.email]}
        isTouched={isTouched}
        onChange={handleOnChange}
      />
      <div className="form-actions">
        <button onClick={handleOnSubmit}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
