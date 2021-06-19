'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');
let convertHandler = new ConvertHandler();

const convert = (input) => {
  
  let num = convertHandler.getNum(input);
  if (!num) num = 1;
  
  const unit = convertHandler.getUnit(input);
  if (!unit) return 'invalid unit';

  const returnUnit = convertHandler.getReturnUnit(unit);
  if (!returnUnit) return 'invalid unit';

  const converted = convertHandler.convert(num, unit);
  if (!converted) return 'invalid unit';

  return {
    initNum: num,
    initUnit: (unit === 'l') ? 'L' : unit.toLowerCase(),
    returnNum: converted,
    returnUnit: returnUnit,
    string: convertHandler.getString(num, unit, converted, returnUnit)
  }
}

module.exports = function (app) {
  
  
  app.route('/api/convert')
  .get(function (req, res) {
    const converted = convert(req.query.input);
    return res.json(converted);
  });
};
