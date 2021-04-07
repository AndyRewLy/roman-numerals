import reduce from "lodash/reduce";

const romanNumeralWithValue = [
  ["C", 100],
  ["L", 50],
  ["X", 10],
  ["V", 5],
  ["I", 1],
];

/**
 * Converts a number input into a roman numeral string
 * @param {*} input Number to convert to a roman numeral
 */
const getRomanNumeral = (numInput) => {
  const { result } = romanNumeralWithValue.reduce(
    ({ result, input }, [romanNumeral, value]) =>
      getRomanNumeralPortion({
        romanNumeral,
        value,
        input,
        result,
      }),
    { result: "", input: numInput }
  );

  return result;
};

const getRomanNumeralPortion = ({ romanNumeral, input, result, value }) => {
  let currentInput = input;
  let currentResult = result;

  while (currentInput / value >= 1) {
    currentInput -= value;
    currentResult += romanNumeral;
  }

  return { result: currentResult, input: currentInput };
};

export default getRomanNumeral;
