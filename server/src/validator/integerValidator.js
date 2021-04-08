/**
 * Validates that the provided input is an integer type
 * @param {} input
 */
const integerValidator = (input) => {
  const parsedFloat = parseFloat(input);
  return !Number.isInteger(parsedFloat)
    ? "Input must be a valid integer"
    : null;
};

export default integerValidator;
