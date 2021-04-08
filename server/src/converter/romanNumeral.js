/**
 * romanNumeral - The character(s) that represents the roman numeral
 * value - the decimal value of the roman numeral
 */
const romanNumeralConfig = [
  { romanNumeral: "C", value: 100 },
  { romanNumeral: "XC", value: 90 },
  { romanNumeral: "L", value: 50 },
  { romanNumeral: "XL", value: 40 },
  { romanNumeral: "X", value: 10 },
  { romanNumeral: "IX", value: 9 },
  { romanNumeral: "V", value: 5 },
  { romanNumeral: "IV", value: 4 },
  { romanNumeral: "I", value: 1 },
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
 * @param {*} config
 * @returns the current resulting string of the operation as well as the curent input left to parse
 */
const getRomanNumeralPortion = ({ romanNumeral, input, result, value }) => {
  let currentInput = input;
  let currentResult = result;

  // While we can still divide the currentInput with the value, add its corresponding romanNumeral
  while (currentInput / value >= 1) {
    currentInput -= value;
    currentResult += romanNumeral;
  }

  return { result: currentResult, input: currentInput };
};

export default getRomanNumeral;
