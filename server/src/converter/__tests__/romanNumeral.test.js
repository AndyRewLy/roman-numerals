import getRomanNumeral from "../romanNumeral";

describe("Test roman numerals", () => {
  describe("Basic tests", () => {
    const basicConversion = [
      { input: "1", expected: "I" },
      { input: "5", expected: "V" },
      { input: "10", expected: "X" },
      { input: "50", expected: "L" },
      { input: "100", expected: "C" },
    ];

    basicConversion.forEach(({ input, expected }) => {
      test("Verify conversion of '" + input + "'to '" + expected + "'", () => {
        expect(getRomanNumeral(input)).toBe(expected);
      });
    });
  });

  describe("Conversion with multiple roman numerals", () => {
    const multipleNumeralConversion = [
      {
        input: "237",
        expected: "CCXXXVII",
      },
      {
        input: "189",
        expected: "CLXXXIX",
      },
      {
        input: "255",
        expected: "CCLV",
      },
    ];

    multipleNumeralConversion.forEach(({ input, expected }) => {
      test("Verify conversion of '" + input + "'to '" + expected + "'", () => {
        expect(getRomanNumeral(input)).toBe(expected);
      });
    });
  });

  describe("Conversion with edge cases for subtractive notation", () => {
    const edgeCases = [
      {
        input: "1",
        expected: "I",
      },
      {
        input: "4",
        expected: "IV",
      },
      {
        input: "9",
        expected: "IX",
      },
      {
        input: "49",
        expected: "XLIX",
      },
      {
        input: "99",
        expected: "XCIX",
      },
    ];

    edgeCases.forEach(({ input, expected }) => {
      test("Verify conversion of '" + input + "'to '" + expected + "'", () => {
        expect(getRomanNumeral(input)).toBe(expected);
      });
    });
  });
});
