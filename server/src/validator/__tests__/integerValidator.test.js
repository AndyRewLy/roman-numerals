import integerValidator from "../integerValidator";

describe("integerValidator", () => {
  test("text is not an integer", () => {
    expect(integerValidator("text")).toBe("Input must be a valid integer");
  });

  test("float is not an integer", () => {
    expect(integerValidator("4.333")).toBe("Input must be a valid integer");
  });

  test("integer is an integer", () => {
    expect(integerValidator("4")).toBe(null);
  });
});
