/**
 * romanNumeral - The character that represents the roman numeral
 * value - the decimal value of the roman numeral character
 * threshold - the threshold where the roman numeral can appear (related to subtractive notation with prefix)
 * prefix - the roman numeral to display when using subtractive notation
 */
const romanNumeralConfig = [
  { romanNumeral: "C", value: 100, threshold: 90, prefix: "X" },
  { romanNumeral: "L", value: 50, threshold: 40, prefix: "X" },
  { romanNumeral: "X", value: 10, threshold: 9, prefix: "I" },
  { romanNumeral: "V", value: 5, threshold: 4, prefix: "I" },
  { romanNumeral: "I", value: 1, threshold: 1, prefix: "" },
];

/**
 * Converts a number input into a roman numeral string
 * @param {*} input Number to convert to a roman numeral
 */
const getRomanNumeral = (numInput) => {
  const { result } = romanNumeralConfig.reduce(
    ({ result, input }, config) =>
      getRomanNumeralPortion({
        input,
        result,
        ...config,
      }),
    { result: "", input: numInput }
  );

  return result;
};

/**
 * Takes the input as well as the current configuration and returns the roman numeral portion.
 * i.e  Given the romanNumeral configuration corresponding to 'L' and an input of 39
 *    - returns XXXIX
 * @param {*} config
 * @returns the current resulting string of the opration as well as the curent input left to parse
 */
const getRomanNumeralPortion = ({
  romanNumeral,
  input,
  result,
  value,
  threshold,
  prefix,
}) => {
  let currentInput = input;
  let currentResult = result;

  // While we can still divide the currentInput with the value, add it's corresponding romanNumeral
  while (currentInput / value >= 1) {
    currentInput -= value;
    currentResult += romanNumeral;
  }

  // Determine if we need to add the subtractive notation for the current input
  if (currentInput / threshold >= 1) {
    currentInput -= threshold;
    currentResult += prefix + romanNumeral;
  }

  return { result: currentResult, input: currentInput };
};

export default getRomanNumeral;
