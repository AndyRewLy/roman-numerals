/**
 * Validates that the input is within the range from min to max, inclusive
 * @param {*} input input to validate against
 */
const validateRange = (min, max) => (input) =>
  input < min || input > max
    ? "Invalid input of '" +
      input +
      "' must be within the range " +
      min +
      "-" +
      max
    : null;

export default validateRange;
