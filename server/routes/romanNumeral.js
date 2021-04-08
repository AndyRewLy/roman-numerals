import express from "express";
import getRomanNumeral from "../src/converter/romanNumeral";
import Validator from "../src/validator";

const { rangeValidator, integerValidator, validate } = Validator;

var router = express.Router();

/* GET a roman numeral given some decimal input */
router.get("/romannumeral", (req, res, next) => {
  const input = req.query.query;

  const validationError = validate([integerValidator, rangeValidator(1, 255)])(
    input
  );

  if (validationError.length != 0) {
    res.status("422").send(validationError);
  } else {
    res.send({ input, output: getRomanNumeral(input) });
  }
});

module.exports = router;
