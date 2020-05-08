'use strict';
var SimpleRandomSelector = require('./simpleRandomSelector')
var FrequencyRandomSelector = require('./frequencyRandomSelector')
var Randomer = require('./randomer');
var RandomSelector = require('./randomSelector');

var DEBUG_RANDOM_SELECTOR_FACTORY = true;
RandomSelector.prototype.DEBUG = false;
/**
 * Factory for random selectors
 */
function RandomSelectorFactory() {
   
}
/**
* Create a selector which elements have the equaly chance to appears in selecting. Selected element will be removed (will not appear in future selecting).
* @param Array elements Array of elements to be randomly selected
*/
RandomSelectorFactory.prototype.createSimpleSelectorWithoutReplacement = function(elements){
    var selector = new SimpleRandomSelector();
    selector.setElements(elements);
    selector.setRelacementMode(false);
    return selector;
} 
/***
* Create a selector which elements have the equaly chance to appears in selecting. Selected element will be return to selector.
* @param Array elements Array of elements to be randomly selected

*/
RandomSelectorFactory.prototype.createSimpleSelectorWithReplacement = function(elements){
    var selector = new SimpleRandomSelector();
    selector.setElements(elements);
    selector.setRelacementMode(true);
    return selector;
} 
/***
* Create a selector allow elements have their frequency of appear in selecting. Selected element will be removed (will not appear in future selecting).
* @param Array elements an array of arrays, each array contain the selectable object follows by an non negative integer frequency
* @param Number totalFrequency maximum frequency to be generated. If not given, the totalFrequency will be sum of all frequencies
* @param bool updateFrequency If true, totalFrequency will be recalculated after a select() call
*/
RandomSelectorFactory.prototype.createFrequencySelectorWithoutReplacement = function(elements, totalFrequency, updateFrequency){
    var selector = new FrequencyRandomSelector();
    selector.setElements(elements);
    selector.setRelacementMode(false);
    selector.setUpdateTotalFrequencyAfterSelect(updateFrequency===true);
    if(totalFrequency !== undefined)
    {
        selector.setTotalFrequency(totalFrequency);
    }
    return selector;
} 
/***
* Create a selector allow elements have their frequency of appear in selecting.
* @param Array elements an array of arrays, each array contain the selectable object follows by an non negative integer frequency
* @param Number totalFrequency maximum frequency to be generated. If not given, the totalFrequency will be sum of all frequencies
* @param bool updateFrequency If true, totalFrequency will be recalculated after a select() call
*/
RandomSelectorFactory.prototype.createFrequencySelectorWithReplacement = function(elements, totalFrequency){
    var selector = new FrequencyRandomSelector();
    selector.setElements(elements);
    selector.setRelacementMode(true);
    if(totalFrequency)
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