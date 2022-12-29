import { useEffect, useRef, useState } from "react";

// This is an example, the of useState and/or useRef depends on the objective.
const SimpleInput = (props) => {
  const nameRef = useRef();
  const [state, setState] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const isInvalidAndTouched = !isValid && isTouched;

  useEffect(() => {
    if (isValid) {
      console.log("Field  " + nameRef.current.id + " is valid!");
    }
  }, [isValid]);

  const handleOnChange = (event) => {
    if (!isTouched) {
      setIsTouched(true);
    }
    setState(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    setIsTouched(true);

    if (state.trim() === "") {
      setIsValid(false);
      return;
    }
    setIsValid(true);

    console.log("useState:\n" + state);

    console.log("useRef:\n" + nameRef.current.value);

    setState("");

    // nameRef.current.value = ""; // NOT A BEST PRACTICE to manipulate directly the DOM.
  };

  return (
    <form>
      <div className={"form-control" + (isInvalidAndTouched ? " invalid" : "")}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameRef}
          type="text"
          id="name"
          onChange={handleOnChange}
          value={state}
        />
        {isInvalidAndTouched && (
          <p className="error-text">You must provide Your Name.</p>
        )}
      </div>
      <div className="form-actions">
        <button onClick={handleOnSubmit}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
