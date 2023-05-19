console.log = function () {};
const { expect } = require('chai');
const rewire = require('rewire');

describe('', function () {
  it('', function () {
    try {
      var appModule = rewire('../main.js');
    } catch (e) {
      expect(
        true,
        'Double check your code. It likely has a syntax error.'
      ).to.equal(false);
    }
    let rollTheDice;
    try {
      rollTheDice = appModule.__get__('rollTheDice');
    } catch (e) {
      expect(true, 'Did you accidentally delete `rollTheDice()`?').to.equal(
        false
      );
    }

    expect(
      rollTheDice,
      '`rollTheDice()` should still be a function expression.'
    ).to.be.an.instanceOf(Function);

    let rolls = [];

    for (i = 0; i < 200; i++) {
      rolls.push(rollTheDice());
    }
    expect(
      rolls.every((roll) => roll > 1 && roll < 13),
      'Your function should always return a value greater than or equal to 2 and less than or equal to 12'
    ).to.equal(true);
  });
});
