import { useState } from "react";

const SimpleInput = (props) => {
  const [state, setState] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = state.trim() !== "";
  const isInvalidAndTouched = !isValid && isTouched;

  let formIsValid = isValid; // && ageIsValid && emailIsValid; // if we got more form elements,
  // we could separate [isValid] into multiple variables and check all them here.

  const handleOnChange = (event) => {
    setState(event.target.value);
  };

  const handleOnBlur = (event) => {
    setIsTouched(true);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    setIsTouched(true);

    if (!isValid) {
      return;
    }

    console.log("useState:\n" + state);

    setState("");
    setIsTouched(false);
  };

  return (
    <form>
      <div className={"form-control" + (isInvalidAndTouched ? " invalid" : "")}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={handleOnChange}
          onBlur={handleOnBlur}
          value={state}
        />
        {isInvalidAndTouched && (
          <p className="error-text">You must provide Your Name.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid} onClick={handleOnSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
