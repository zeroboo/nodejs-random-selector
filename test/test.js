var assert = require('assert');
var expect = require('chai').expect;

describe('Test random-selector constructing', function() {
  before(function() {
    console.log("BeforeSuite!");
  });
  beforeEach(function() {
    console.log("BeforeTest!");
  });
  
  //Test constructor
  describe('#Construct selector with empty: error', function() {
    assert.equal(false, true);
  });

  //Test constructor
  describe('#Construct selector with invalid parameter: error', function() {
    assert.equal(false, true);
  });

  //Test constructor
  describe('#Construct selector with valid parameter: no error', function() {
    assert.equal(false, true);
  });

  //
  describe('#Construct selector with valid parameter: no error', function() {
    assert.equal(false, true);
  });
  
  //Test
  describe('-indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});

describe('Test random-selector selecting', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});


var assertChai = require('chai').assert
  , foo = 'bar'
  , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

assertChai.typeOf(foo, 'string'); // without optional message
assertChai.typeOf(foo, 'string', 'foo is a string'); // with optional message
assertChai.equal(foo, 'bar', 'foo equal `bar`');
assertChai.lengthOf(foo, 3, 'foo`s value has a length of 3');
assertChai.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea');