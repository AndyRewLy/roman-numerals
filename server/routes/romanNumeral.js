import express from "express";
import getRomanNumeral from "../src/converter/romanNumeral";

var router = express.Router();

/* GET a roman numeral given some decimal input */
router.get("/romannumeral", (req, res, next) => {
  const input = req.query.query;
  res.send({ input, output: getRomanNumeral(input) });
});

module.exports = router;
