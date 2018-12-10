var selectorFactory = require('../src/index');
const assert = require('chai').assert;
const expect = require('chai').expect;
var RandomSelector = require('../src/randomSelector');
var FrequencyRandomSelector = require('../src/frequencyRandomSelector');

describe('Test FrequencyRandomSelector', function() {
    before(function() {
        console.log("BeforeSuite!");
        ///RandomSelector.prototype.DEBUG = true;
      });
      beforeEach(function() {
        ///console.log("BeforeTest!");
        FrequencyRandomSelector.prototype.DEBUG = false;
      });
    describe("#Construct selector with replacement", function(){
        it("Valid parameters, correct config", function(){
            FrequencyRandomSelector.prototype.DEBUG = true;
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
            ///selector.DEBUG = true;
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

    describe("#Seleting with replacement", function(){
        it("Allow null selecting: has null value", function(){
            var selector = selectorFactory.createFrequencySelectorWithReplacement([
                    ['A', 10], ['B', 10]
                ]
                , 100
            );
            var hasNull = false;
            var testCount = 1000;
            for(let i=0;i<testCount;i++)
            {
                var selectedElement = selector.select();
                if(selectedElement == null)
                {
                    hasNull = true;
                    break;
                }
            }
            assert.isTrue(hasNull);
        });

        it("Not allow null selecting: has no null value", function(){
            var selector = selectorFactory.createFrequencySelectorWithReplacement([
                    ['A', 10], ['B', 10]
                ]
            );
            var hasNull = false;
            var testCount = 1000;
            ///selector.DEBUG = true;
            for(let i=0;i<testCount;i++)
            {
                var selectedElement = selector.select();
                if(selectedElement === null)
                {
                    hasNull = true;
                    break;
                }
            }
            assert.isFalse(hasNull);
        });
        
    });

    describe("#Seleting without replacement", function(){
        it("Out of values, return null", function(){
            var selector = selectorFactory.createFrequencySelectorWithoutReplacement([
                    ['A', 10], ['B', 10]
                ]
                , 20
                , true
            );
            assert.isTrue(selector.select()!=null);
            assert.isTrue(selector.select()!=null);
            assert.isTrue(selector.select()==null);
        });

        it("In update frequency after select mode, totalFrequency updated ", function(){
            var selector = selectorFactory.createFrequencySelectorWithoutReplacement([
                    ['A', 10], ['B', 10], ['C', 10], ['D', 10]
                ]
                , 40
                , true
            );
            assert.equal(40, selector.getTotalFrequency());
            selector.select();
            assert.equal(30, selector.getTotalFrequency());
            
        });
        it("In not update frequency after select mode, totalFrequency not changed after select", function(){
            var selector = selectorFactory.createFrequencySelectorWithoutReplacement([
                    ['A', 10], ['B', 10], ['C', 10], ['D', 10]
                ]
                , 40
                , false
            );
            assert.equal(40, selector.getTotalFrequency());
            selector.select();
            assert.equal(40, selector.getTotalFrequency());
            
        });
        
    });
});