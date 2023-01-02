class Validator {
  static name = (value) => value.trim().length > 5;

  static age = (value) => {
    const n = Number(value);
    return n > 12 && n < 101;
  };

  // https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
  static email = (value) =>
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      value
    );
}

export default Validator;
