/* eslint-disable no-unused-vars */
const add = require('./add');
const sub = require('./sub');
const mult = require('./mult');
const div = require('./div');
const set = require('./set');

function createCalculator(currentNumber) {
  return {
    add,
    sub,
    mult,
    div,
    set,
  };
}

module.exports = createCalculator();
