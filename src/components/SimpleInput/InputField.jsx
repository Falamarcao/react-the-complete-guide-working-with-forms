import useValidation from "../../hooks/useValidation";

const InputField = (props) => {
  const {
    value,
    validationMessage,
    validation,
    isTouched: isTouchedOut,
    onChange,
  } = props;

  const [handleOnChange, handleOnBlur, state, isInvalid] = useValidation({
    value,
    validation,
    isTouchedOut,
    onChange,
  });

  const _validationMessage = validationMessage
    ? `${props.label} ${validationMessage}.`
    : `You must provide ${props.label}.`;

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
      {isInvalid && <p className="error-text">{_validationMessage}</p>}
    </div>
  );
};

export default InputField;
