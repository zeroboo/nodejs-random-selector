var selectorFactory = require('../src/index');
const assert = require('chai').assert;
const expect = require('chai').expect;
var RandomSelector = require('../src/randomSelector');
var FrequencyRandomSelector = require('../src/frequencyRandomSelector');

describe.only('Test FrequencyRandomSelector', function() {
    before(function() {
        console.log("BeforeSuite!");
        ///RandomSelector.prototype.DEBUG = true;
      });
      beforeEach(function() {
        ///console.log("BeforeTest!");
        ///RandomSelector.prototype.DEBUG = true;
      });
    describe("#Construct selector with replacement", function(){
        it("Valid parameters, correct config", function(){
            var selector = selectorFactory.createFrequencySelectorWithReplacement([
                ['A', 10], ['B', 20], [1, 30], [null, 30]]
                , 100
            );
            assert.equal(100, selector.getTotalFrequency(), "Correct total freequency");
            assert.isTrue(selector.hasRelacementMode());
            assert.equal(4, selector.getElementCount());
            assert.equal(100, selector.getTotalFrequency());

            assert.deepEqual([10, 20, 30, 30], selector.getFrequencies(), "Correct frequencies");
            assert.deepEqual([10, 30, 60, 90], selector.getAccumulateFrequencies(), "Correct accumulate frequencies");
            
        });
        
        it("Valid parameters, correct default config", function(){
            var selector = selectorFactory.createFrequencySelectorWithReplacement([
                ['A', 10], ['B', 20], [1, 30], [null, 30]]
            );
            
            assert.isTrue(selector.hasRelacementMode());
            assert.equal(4, selector.getElementCount());
            assert.equal(90, selector.getTotalFrequency(), "Correct default total frequency");
            assert.deepEqual([10, 20, 30, 30], selector.getFrequencies(), "Correct frequencies");
            assert.deepEqual([10, 30, 60, 90], selector.getAccumulateFrequencies(), "Correct accumulate frequencies");
        });
        it("Negative total frequency, Error", function(){
            assert.throws(function(){
                var selector = selectorFactory.createFrequencySelectorWithReplacement([[0, 1]], -100);
                    
            }, Error, "");
            
        });
        it("Null elements, has error", function(){
            assert.throws(function(){
                var selector = selectorFactory.createFrequencySelectorWithReplacement(null, 100);

            }, Error, "");
        });
        it("Elements without frequency, has error", function(){
            assert.throws(function(){
                var selector = selectorFactory.createFrequencySelectorWithReplacement([
                    ['A'], ['B', 10], [1, 10], [null, 10]]
                    , 100
                );
            }, Error, "");
        });
        it("Elements with null frequency, has error", function(){
            assert.throws(function(){
                var selector = selectorFactory.createFrequencySelectorWithReplacement([
                    ['A', 10], ['B', null], [1, 10], [null, 10]]
                    , 100
                );
            }, Error, "");
        });
        it("Elements with string frequency, has error", function(){
            assert.throws(function(){
                var selector = selectorFactory.createFrequencySelectorWithReplacement([
                    ['A', 10], ['B', 10], [1, "ten"], [null, 10]]
                    , 100
                );
            }, Error, "");
        });
        it("Elements with negative frequency, has error", function(){
            assert.throws(function(){
                var selector = selectorFactory.createFrequencySelectorWithReplacement([
                    ['A', 10], ['B', 10], [1, -10], [null, 10]]
                    , 100
                );
            }, Error, "");
        });
        
    });
    describe("#Construct selector without replacement", function(){
        it("Valid parameters, correct config", function(){
            var selector = selectorFactory.createFrequencySelectorWithoutReplacement([
                ['A', 10], ['B', 20], [1, 30], [null, 30]]
                , 100
            );
            assert.equal(100, selector.getTotalFrequency(), "Correct total freequency");
            assert.isFalse(selector.hasRelacementMode());
            assert.equal(4, selector.getElementCount());
            assert.equal(100, selector.getTotalFrequency());

            assert.deepEqual([10, 20, 30, 30], selector.getFrequencies(), "Correct frequencies");
            assert.deepEqual([10, 30, 60, 90], selector.getAccumulateFrequencies(), "Correct accumulate frequencies");
            
        });
        
        it("Valid parameters, correct default config", function(){
            var selector = selectorFactory.createFrequencySelectorWithoutReplacement([
                ['A', 10], ['B', 20], [1, 30], [null, 30]]
            );
            
            assert.isFalse(selector.hasRelacementMode());
            assert.equal(4, selector.getElementCount());
            assert.equal(90, selector.getTotalFrequency(), "Correct default total frequency");
            assert.deepEqual([10, 20, 30, 30], selector.getFrequencies(), "Correct frequencies");
            assert.deepEqual([10, 30, 60, 90], selector.getAccumulateFrequencies(), "Correct accumulate frequencies");
        });
        it("Negative total frequency, Error", function(){
            assert.throws(function(){
                var selector = selectorFactory.createFrequencySelectorWithoutReplacement([[0, 1]], -100);
                    
            }, Error, "");
            
        });
        it("Null elements, has error", function(){
            assert.throws(function(){
                var selector = selectorFactory.createFrequencySelectorWithoutReplacement(null, 100);

            }, Error, "");
        });
        it("Elements without frequency, has error", function(){
            assert.throws(function(){
                var selector = selectorFactory.createFrequencySelectorWithoutReplacement([
                    ['A'], ['B', 10], [1, 10], [null, 10]]
                    , 100
                );
            }, Error, "");
        });
        it("Elements with null frequency, has error", function(){
            assert.throws(function(){
                var selector = selectorFactory.createFrequencySelectorWithoutReplacement([
                    ['A', 10], ['B', null], [1, 10], [null, 10]]
                    , 100
                );
            }, Error, "");
        });
        it("Elements with string frequency, has error", function(){
            assert.throws(function(){
                var selector = selectorFactory.createFrequencySelectorWithoutReplacement([
                    ['A', 10], ['B', 10], [1, "ten"], [null, 10]]
                    , 100
                );
            }, Error, "");
        });
        it("Elements with negative frequency, has error", function(){
            assert.throws(function(){
                var selector = selectorFactory.createFrequencySelectorWithoutReplacement([
                    ['A', 10], ['B', 10], [1, -10], [null, 10]]
                    , 100
                );
            }, Error, "");
        });
        
    });
});