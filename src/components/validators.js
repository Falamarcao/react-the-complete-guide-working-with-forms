class Validator {
  static name = (value) => value.trim().length > 5;

  static age = (value) => {
    const n = Number(value);
    return n > 12 && n < 101;
  };
}

export default Validator;
