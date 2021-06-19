const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    suite('Reading Numbers', function () {
        // # Whole number input
        test('#[READING] Whole number input', function () {
          assert.isNumber(convertHandler.getNum('12l'), 'Should return 12');
          assert.isNumber(convertHandler.getNum('1mi'), 'Should return 1');
          assert.isNull(convertHandler.getNum('mil'), 'Should return null');
          assert.isNumber(convertHandler.getNum('12ss1'), 'Should return 12');
        });

        // # Decimal number input
        test('#[READING] Decimal number input', function () {
            assert.isNumber(convertHandler.getNum('1.2l'), 'Should extract a number');
            assert.strictEqual(convertHandler.getNum('1.2l'), 1.2, 'Should be 1.2');
            assert.strictEqual(convertHandler.getNum('0.12mi'), 0.12, 'Should be 0.12');
        });

        // # Fractional input
        test('#[READING] Fractional number input', function () {
            assert.strictEqual(convertHandler.getNum('12/4'), 3, 'Should be 3');
            assert.strictEqual(convertHandler.getNum('7/2'), 3.5, 'Should be 3.5');
            assert.strictEqual(convertHandler.getNum('15/5'), 3, 'Should be 3');
            assert.strictEqual(convertHandler.getNum('1/2'), 0.5, 'Should be 3');
        });

      });
});