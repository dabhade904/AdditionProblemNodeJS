var assert = require('chai').assert;
var sumOfNumber = require('../Main/sum')
describe('Addition  test cases', function () {

    it('1 + 1 should be equals to 2', function () {
        assert.equal(sumOfNumber.add(1, 1), 2);
    });

    it('should return null when not passing anything ', function () {
        assert.equal(0, sumOfNumber.add());
    });

    it('should return isNotNumber when passing String arguement', function () {
        assert.isNotNumber(sumOfNumber.add(1, "sadh"), 2);
    });

    it('should return undifined when type is not define ', function () {
        assert.equal(0, sumOfNumber.add(1));
    });

    it('should return eqaul when passing null  ', function () {
        assert.equal(0, sumOfNumber.add(1, null));
    });

    it('should return NaN for a given number  ', function () {
        assert.isNotNaN(0, sumOfNumber.add(1,));
    });
});
