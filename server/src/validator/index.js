import integerValidator from "./integerValidator";
import rangeValidator from "./rangeValidator";

const validate = (validators = []) => (input) => {
  return validators
    .map((validator) => {
      const result = validator(input);
      return result;
    })
    .filter((result) => result);
};

export default { integerValidator, rangeValidator, validate };
