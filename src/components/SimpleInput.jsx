import { useRef, useState } from "react";

// This is an example, the of useState and/or useRef depends on the objective.
const SimpleInput = (props) => {
  const [state, setState] = useState("");
  const nameRef = useRef();

  const handleOnChange = (event) => {
    setState(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    console.log("useState:\n" + state);

    console.log("useRef:\n" + nameRef.current.value);

    setState("");

    // nameRef.current.value = ""; // NOT A BEST PRACTICE to manipulate directly the DOM.
  };

  return (
    <form>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameRef}
          type="text"
          id="name"
          onChange={handleOnChange}
          value={state}
        />
      </div>
      <div className="form-actions">
        <button onClick={handleOnSubmit}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
