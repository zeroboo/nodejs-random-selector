'use strict';
var assert = require('chai').assert;
var Randomer = require('../src/randomer');
var RandomSelector = require('../src/randomSelector');
describe('Test randomSelector', function() {
    before(function()
     {
        console.log("beforeSuite!", __dirname);
                
      });
    beforeEach(function() {
        RandomSelector.prototype.DEBUG = false;
    });
    after(function() {
        console.log("afterSuite!");
    });
    afterEach(function() {
        RandomSelector.prototype.DEBUG = false;
    });
        
    describe('#constructor', function() {
        it("Use custom randomer: randomer applied", function(){
            var customRandomer = new Randomer('custom');
            ///RandomSelector.prototype.DEBUG = true;
            var selector = new RandomSelector(customRandomer);
            assert.equal(customRandomer.getTypeName(), selector.getRandomer().getTypeName());
            selector.DEBUG = true;
            selector.debug('DefaultRandomer', selector.getRandomer().getName());
            assert.equal('custom', selector.getRandomer().getName());
        });
        it("Give no randomer, default randomer created", function(){
            ///RandomSelector.prototype.DEBUG = true;
            var selector = new RandomSelector();
            assert.equal("Randomer", selector.getRandomer().getTypeName());
            assert.equal('DefaultRandomer', selector.getRandomer().getName());
        });
    });
    describe('#Elements access', function() {
        it("Empty elements: return empty element", function(){
            ///RandomSelector.prototype.DEBUG = true;
            var selector = new RandomSelector();
            

            assert.equal(0, selector.getElementCount());
            assert.deepEqual([], selector.getElements());
        });
    });
    describe('#Selecting', function() {
        it("No element: return null", function(){
            ///RandomSelector.prototype.DEBUG = true;
            var selector = new RandomSelector();
            
            assert.equal(null, selector.select());
            assert.equal(null, selector.selectWithReplacement());
            assert.equal(null, selector.selectWithoutReplacement());
            selector.setElements([]);
            assert.equal(null, selector.select());
            assert.equal(null, selector.selectWithReplacement());
            assert.equal(null, selector.selectWithoutReplacement());
        });
    });
});