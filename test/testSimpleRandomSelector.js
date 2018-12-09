var randomSelector = require('../src/index');
const assert = require('chai').assert;
const expect = require('chai').expect;
var RandomSelector = require('../src/randomSelector');


describe('Test random-selector constructing', function() {
  before(function() {
    console.log("BeforeSuite!");
    RandomSelector.prototype.DEBUG = true;
  });
  beforeEach(function() {
    console.log("BeforeTest!");
  });
  
  //Test constructor
  describe('#Constructor', function() {
    it("New with undefined value: Error", function(){
      assert.throws(function(){
        randomSelector.createSimpleRandomSelector();
      }, Error, "Error: invalid elements (undefined)!!!");
    });
    it("New with null value: Error", function(){
      assert.throws(function(){
        randomSelector.createSimpleRandomSelector(null);
      }, Error, "Error: invalid elements (null)!!!");
    });
    
    it("New with number: Error!", function(){
      assert.throws(function(){
        randomSelector.createSimpleRandomSelector(1);
      }, Error, "Error: invalid elements (not an array)!!!");
    });
    it("New with valid parameters: no error!", function(){
      var selector = randomSelector.createSimpleRandomSelector([1, 2, 3, 5]);
      
    });

  });
  describe('#getElementCount', function() {
    it("Return correct count", function(){
      var selector = randomSelector.createSimpleRandomSelector([1, 2, 3, 5]);
      assert.equal(4, selector.getElementCount());
      assert.deepEqual([1, 2, 3, 5], selector.getElements());
    });
  });

  describe('#getElements', function() {
    it("Return correct elements", function(){
      var selector = randomSelector.createSimpleRandomSelector([1, 2, 3, 5]);
      assert.deepEqual([1, 2, 3, 5], selector.getElements());
    });
  });

  describe('#selectAndReplace', function() {
    it("Select number array: return an array element", function(){
      var elements = [1, 2, 3, 5];
      var selector = randomSelector.createSimpleRandomSelector(elements);
      var selectedElement = selector.selectAndReplace();
      expect(elements).to.contains(selectedElement);
    });
    it("Select string array: return an array element", function(){
      var elements = ['hello','world','!'];
      var selector = randomSelector.createSimpleRandomSelector(elements);
      var selectedElement = selector.selectAndReplace();
      expect(elements).to.contains(selectedElement);
    });
    it("Select mix array: return an array element", function(){
      var elements = ['hello','world','!', 1, 2, 3, 5, null, undefined];
      var selector = randomSelector.createSimpleRandomSelector(elements);
      for(var i=0;i<1000;i++){
        var selectedElement = selector.selectAndReplace();
        expect(elements).to.contains(selectedElement);
      }
    });
    it("Select mix array: can return null", function(){
      var elements = ['hello','world','!', 1, 2, 3, 5, null, undefined];
      var selector = randomSelector.createSimpleRandomSelector(elements);
      var hasNull = false;
      for(var i=0;i<1000;i++){
        var selectedElement = selector.selectAndReplace();
        if(selectedElement == null)
        {
          hasNull = true;
          break;
        }
      }
      assert.isTrue(hasNull);
    });
    it("Select mix array: can return undefined", function(){
      var elements = ['hello','world','!', 1, 2, 3, 5, null, undefined];
      var selector = randomSelector.createSimpleRandomSelector(elements);
      var hasUndefined = false;
      for(var i=0;i<1000;i++){
        var selectedElement = selector.selectAndReplace();
        if(selectedElement == null)
        {
          hasUndefined = true;
          break;
        }
      }
      assert.isTrue(hasUndefined);
    });
    it("Select not return null if there is no null element", function(){
      var elements = ['hello','world','!', 1, 2, 3, 5];
      var selector = randomSelector.createSimpleRandomSelector(elements);
      for(var i=0;i<100;i++){
        var selectedElement = selector.selectAndReplace();
        assert.isTrue(selectedElement != null);
        assert.isTrue(selectedElement != undefined);
      }
    });
    
    it("Randomness: ")
  });

  describe('#SelectWithReplace', function() {
    it("After all element selected, return null");
    it("Select not return null if has at least 1 not null element");
    it("Select return valid element if has at least 1 element");
    it("Randomness: ")
  });
});