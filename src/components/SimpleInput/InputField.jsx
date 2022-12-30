import { useEffect, useState } from "react";

const InputField = (props) => {
  const [state, setState] = useState(props.value || "");
  const [isTouched, setIsTouched] = useState(false);

  const validation = (value) => props.validation || value.trim() !== "";
  const isValid = validation(state);
  const isInvalid = !isValid && isTouched;

  const handleOnChange = (event) => {
    setState(event.target.value);
    props.onChange(event, validation(event.target.value)); // isValid is receiving old value
  };

  const handleOnBlur = (event) => {
    setIsTouched(true);
  };

  const { isTouched: isTouchedOut } = props;
  useEffect(() => {
    setIsTouched(isTouchedOut);
  }, [isTouchedOut]);

  return (
    <div className={"form-control" + (isInvalid ? " invalid" : "")}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        value={state}
      />
      {isInvalid && (
        <p className="error-text">You must provide {props.label}.</p>
      )}
    </div>
  );
};

export default InputField;
