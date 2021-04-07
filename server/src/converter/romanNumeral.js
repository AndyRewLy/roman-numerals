const romanNumeralWithValue = [
  { romanNumeral: "C", value: 100, threshold: 90, prefix: "X" },
  { romanNumeral: "L", value: 50, threshold: 40, prefix: "X" },
  { romanNumeral: "X", value: 10, threshold: 9, prefix: "I" },
  { romanNumeral: "V", value: 5, threshold: 4, prefix: "I" },
  { romanNumeral: "I", value: 1, threshold: 1, prefix: "" },
];

/**
 * Converts a number input into a roman numeral string
 * @param {String} input Number to convert to a roman numeral
 */
const getRomanNumeral = (numInput) => {
  const { result } = romanNumeralWithValue.reduce(
    ({ result, input }, romanNumeralConfig) =>
      getRomanNumeralPortion({
        input,
        result,
        ...romanNumeralConfig,
      }),
    { result: "", input: numInput }
  );

  return result;
};

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

  while (currentInput / value >= 1) {
    currentInput -= value;
    currentResult += romanNumeral;
  }

  if (currentInput / threshold >= 1) {
    currentInput -= threshold;
    currentResult += prefix + romanNumeral;
  }

  return { result: currentResult, input: currentInput };
};

export default getRomanNumeral;
