import express from "express";
import getRomanNumeral from "../src/converter/romanNumeral";
import rangeValidator from "../src/validator/rangeValidator";

var router = express.Router();

/* GET a roman numeral given some decimal input */
router.get("/romannumeral", function (req, res, next) {
  rangeValidator(1, 255)(247);
  res.send(getRomanNumeral(247));
});

module.exports = router;
