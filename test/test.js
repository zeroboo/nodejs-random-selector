var assert = require('assert');
var expect = require('chai').expect;
var SelectorFactory = require('../src/index');
describe('Test random-selector constructing', function() {
  before(function() {
    console.log("BeforeSuite!");
  });
  beforeEach(function() {
    console.log("BeforeTest!");
  });
  
  //Test constructor
  describe('#TestFactory', function() {
    it("Construct success", function(){
      var factory = SelectorFactory;
      
      factory.DEBUG = true;
      factory.debug("Factory constructed!");
      factory.DEBUG = false;
      factory.debug("You don't see me!");
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