import rangeValidator from "../rangeValidator";

describe("rangeValidator", () => {
  test("input is within the range", () => {
    expect(rangeValidator(1, 255)(100)).toBe(null);
  });

  test("input is below the range", () => {
    expect(rangeValidator(1, 255)(0)).toBe(
      "Invalid input of '0' must be within the range 1-255"
    );
  });

  test("input is above the range", () => {
    expect(rangeValidator(1, 255)(256)).toBe(
      "Invalid input of '256' must be within the range 1-255"
    );
  });

  describe("edge cases", () => {
    test("input is the min value", () => {
      expect(rangeValidator(1, 255)(1)).toBe(null);
    });
    test("input is the max value", () => {
      expect(rangeValidator(1, 255)(255)).toBe(null);
    });
  });
});
