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
      test("Verify conversion to '" + expected + "'", () => {
        expect(getRomanNumeral(input)).toBe(expected);
      });
    });
  });

  describe("Conversion with multiple roman numerals", () => {
    const toTest = [
      {
        input: "237",
        expected: "CCXXXVII",
      },
      {
        input: "255",
        expected: "CCLV",
      },
      {
        input: "1",
        expected: "I",
      },
      {
        input: "4",
        expected: "IIII",
      },
      {
        input: "9",
        expected: "VIIII",
      },
      {
        input: "49",
        expected: "XXXXVIIII",
      },
      {
        input: "99",
        expected: "LXXXXVIIII",
      },
    ];

    toTest.forEach(({ input, expected }) => {
      test("Verify conversion to '" + expected + "'", () => {
        expect(getRomanNumeral(input)).toBe(expected);
      });
    });
  });
});
