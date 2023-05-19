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
    let reportingForDuty;
    try {
      reportingForDuty = appModule.__get__('reportingForDuty');
    } catch (e) {
      expect(true, 'did you create reportingForDuty?').to.equal(false);
    }

    expect(
      reportingForDuty,
      'Did you create reportingForDuty as either a function expression or a function declaration?'
    ).to.be.an.instanceOf(Function);

    expect(
      reportingForDuty('Private', 'Fido'),
      "Your function should accept two strings as arguments and return a string in the following format: 'rank lastName reporting for duty!'"
    ).to.equal('Private Fido reporting for duty!');

    expect(
      reportingForDuty('hey', 'bro'),
      "Your function should accept two strings as arguments and return a string in the following format: 'rank lastName reporting for duty!'"
    ).to.equal('hey bro reporting for duty!');
  });
});
