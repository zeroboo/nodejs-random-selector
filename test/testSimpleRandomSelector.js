var selectorFactory = require('../src/index');
const assert = require('chai').assert;
const expect = require('chai').expect;
var RandomSelector = require('../src/randomSelector');
///const NormalDistribution=require('normal-distribution');
///require('factorial');
describe('Test SimpleRandomSelector constructing', function() {
  before(function() {
    console.log("BeforeSuite!");
    ///RandomSelector.prototype.DEBUG = true;
  });
  beforeEach(function() {
    ///console.log("BeforeTest!");
    ///RandomSelector.prototype.DEBUG = true;
  });
  
  //Test constructor
  describe('#Constructor', function() {
    it("New with undefined value: Error", function(){
      assert.throws(function(){
        selectorFactory.createSimpleSelectorWithoutReplacement();
      }, Error, "Error: invalid elements (undefined)!!!");
    });
    it("New with null value: Error", function(){
      assert.throws(function(){
        selectorFactory.createSimpleSelectorWithoutReplacement(null);
      }, Error, "Error: invalid elements (null)!!!");
    });
    
    it("New with number: Error!", function(){
      assert.throws(function(){
        selectorFactory.createSimpleSelectorWithoutReplacement(1);
      }, Error, "Error: invalid elements (not an array)!!!");
    });
    
    it("New with valid parameters: no error!", function(){
      var selector = selectorFactory.createSimpleSelectorWithoutReplacement([1, 2, 3, 5]);
      selector.DEBUG = true;
      selector.debug('Constructed!');
    });

    it("New with valid parameters: correct replacementMode", function(){
      var selector = selectorFactory.createSimpleSelectorWithReplacement([1, 2, 3, 5]);
      assert.isTrue(selector.hasRelacementMode());

      selector = selectorFactory.createSimpleSelectorWithoutReplacement([1, 2, 3, 5]);
      assert.isFalse(selector.hasRelacementMode());
    });
  });
  describe("#setReplacementMode()", function(){
    
    var selector = selectorFactory.createSimpleSelectorWithReplacement([1]);
    assert.isTrue(selector.hasRelacementMode());
    selector.setRelacementMode(false);
    assert.isFalse(selector.hasRelacementMode());
    selector.setRelacementMode(true);
    assert.isTrue(selector.hasRelacementMode());
  });
  
  describe('#getElementCount', function() {
    it("Return correct count", function() {
      var selector = selectorFactory.createSimpleSelectorWithoutReplacement([1, 2, 3, 5]);
      assert.equal(4, selector.getElementCount());
      assert.deepEqual([1, 2, 3, 5], selector.getElements());
    });
  });

  describe('#getElements', function() {
    it("Return correct elements", function(){
      var selector = selectorFactory.createSimpleSelectorWithoutReplacement([1, 2, 3, 5]);
      assert.deepEqual([1, 2, 3, 5], selector.getElements());
    });
  });

  describe('#Selecting with replacement', function() {
    it("Select number array: return an array element", function(){
      var elements = [1, 2, 3, 5];
      var selector = selectorFactory.createSimpleSelectorWithReplacement(elements);
      var selectedElement = selector.select();
      expect(elements).to.contains(selectedElement);
    });
    it("Select string array: return an array element", function(){
      var elements = ['hello','world','!'];
      var selector = selectorFactory.createSimpleSelectorWithReplacement(elements);
      var selectedElement = selector.select();
      expect(elements).to.contains(selectedElement);
    });
    it("Select mix array: return an array element", function(){
      var elements = ['hello','world','!', 1, 2, 3, 5, null, undefined];
      var selector = selectorFactory.createSimpleSelectorWithReplacement(elements);
      selector.DEBUG = false;
      for(var i=0;i<1000;i++){
        var selectedElement = selector.select();
        expect(elements).to.contains(selectedElement);
      }
    });
    it("Select mix array: can return null", function(){
      var elements = ['hello','world','!', 1, 2, 3, 5, null, undefined];
      var selector = selectorFactory.createSimpleSelectorWithReplacement(elements);
      var hasNull = false;
      selector.DEBUG = false;
      for(var i=0;i<1000;i++){
        var selectedElement = selector.select();
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
      var selector = selectorFactory.createSimpleSelectorWithReplacement(elements);
      selector.DEBUG = false;
      var hasUndefined = false;
      for(var i=0;i<1000;i++){
        var selectedElement = selector.select();
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
      var selector = selectorFactory.createSimpleSelectorWithReplacement(elements);
      selector.DEBUG = false;
      for(var i=0;i<100;i++){
        var selectedElement = selector.select();
        assert.isTrue(selectedElement != null);
        assert.isTrue(selectedElement != undefined);
      }
    });
    
    it("Hypothesis test: coin toss is fair on head!", function(){
      
      var selector = selectorFactory.createSimpleSelectorWithReplacement(['H'/*Head => 0*/
        , 'T' /*Tail => 1*/]);
      ///
      selector.DEBUG = false;
      var tossCount = 10000;
      var headCount = 0;
      for(var i=0;i<tossCount;i++)
      {
        var result = selector.select();
        if(result==='H')
        {
          headCount++;
        }
      }
      var r = headCount/tossCount;///actual probability of obtaining heads in a coin toss)
      var zValue = 3.8906;
      var p = headCount/tossCount; //true probability of obtaining heads
      var E = zValue/(2*Math.sqrt(tossCount)); 
      console.log('Corresponding to 99.99% level of confidence (p-E < r < p+E): ', p-E,'<', r,'<', p+E);
      assert.isTrue(r>p-E, "Corresponding to 99.99% level of confidence: p-E < r");
      assert.isTrue(r<p+E, "Corresponding to 99.99% level of confidence: r < p+E");
    });

    it("Hypothesis test: dice rolling is fair on 5!", function(){
      
      var selector = selectorFactory.createSimpleSelectorWithReplacement([1, 2, 3, 4, 5, 6]);
      ///
      selector.DEBUG = false;
      var tossCount = 10000;
      var fiveCount = 0;
      for(var i=0;i<tossCount;i++)
      {
        var result = selector.select();
        if(result===5)
        {
          fiveCount++;
        }
      }
      var r = fiveCount/tossCount;///actual probability of obtaining five
      var zValue = 3.8906;
      var p = 1/6; //true probability of obtaining five
      var E = zValue/(2*Math.sqrt(tossCount)); 
      console.log('Corresponding to 99.99% level of confidence (p-E < r < p+E): ', p-E,'<', r,'<', p+E);
      assert.isTrue(r>p-E, "Corresponding to 99.99% level of confidence: p-E < r");
      assert.isTrue(r<p+E, "Corresponding to 99.99% level of confidence: r < p+E");
    });
  });

  describe('#Selecting without replacement', function() {
    it("After all element selected, return null", function(){
      var selector = selectorFactory.createSimpleSelectorWithoutReplacement([1, 2, 3, 5]);
      ///selector.DEBUG = true;
      assert.isTrue(selector.select() != null);
      assert.isTrue(selector.select() != null);
      assert.isTrue(selector.select() != null);
      assert.isTrue(selector.select() != null);

      assert.isTrue(selector.select() == null);
    });
    it("Select not return null if has at least 1 not null element", function(){
      var testCount = 1000;
      for(var i=0;i<testCount;i++)
      {
        var selector = selectorFactory.createSimpleSelectorWithoutReplacement([1, 2, 3, 5]);
        assert.isTrue(selector.select() != null);
        assert.isTrue(selector.select() != null);
        assert.isTrue(selector.select() != null);
        assert.isTrue(selector.select() != null);
      }
    });
    it("Select may return null element", function(){
      var testCount = 1000;
      var hasNull = false;
      
      for(var i=0;i<testCount;i++)
      {
        var selector = selectorFactory.createSimpleSelectorWithoutReplacement([null, 2, null, 5]);
        ///selector.DEBUG = true;
        var selectedElement = selector.select();
        ///console.log("Selected: ", selectedElement);
        if(selectedElement == null)
        {
          hasNull = true;
          break;
        }
      }
      assert.isTrue(hasNull);
    });
    it("Randomness: ")
  });
});