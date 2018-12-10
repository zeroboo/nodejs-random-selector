'use strict';
var SimpleRandomSelector = require('./simpleRandomSelector')
var FrequencyRandomSelector = require('./frequencyRandomSelector')
var Randomer = require('./randomer');
var RandomSelector = require('./randomSelector');

var DEBUG_RANDOM_SELECTOR_FACTORY = true;
RandomSelector.prototype.DEBUG = false;

function RandomSelectorFactory() {
   
}
/**
 * @param Array elements Elements to be randomly selected
*/
RandomSelectorFactory.prototype.createSimpleSelectorWithoutReplacement = function(elements){
    var selector = new SimpleRandomSelector();
    selector.setElements(elements);
    selector.setRelacementMode(false);
    return selector;
} 
RandomSelectorFactory.prototype.createSimpleSelectorWithReplacement = function(elements){
    var selector = new SimpleRandomSelector();
    selector.setElements(elements);
    selector.setRelacementMode(true);
    return selector;
} 
RandomSelectorFactory.prototype.createFrequencySelectorWithoutReplacement = function(elements, totalFrequency){
    var selector = new FrequencyRandomSelector();
    selector.setElements(elements);
    selector.setRelacementMode(false);
    if(totalFrequency !== undefined)
    {
        selector.setTotalFrequency(totalFrequency);
    }
    return selector;
} 
RandomSelectorFactory.prototype.createFrequencySelectorWithReplacement = function(elements, totalFrequency){
    var selector = new FrequencyRandomSelector();
    selector.setElements(elements);
    selector.setRelacementMode(true);
    if(totalFrequency !== undefined)
    {
        selector.setTotalFrequency(totalFrequency);
    }
    return selector;
} 
RandomSelectorFactory.prototype.debug = function(){
    if(DEBUG_RANDOM_SELECTOR_FACTORY){
            console.log("RandomSelectorFactory: ", arguments);
    }
}

module.exports = new RandomSelectorFactory();
exports.SimpleRandomSelector = require('./simpleRandomSelector');
exports.FrequencyRandomSelector = require('./frequencyRandomSelector');
exports.Randomer = Randomer;