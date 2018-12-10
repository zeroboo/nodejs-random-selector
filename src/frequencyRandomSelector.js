const RandomSelector = require('./randomSelector');
const DEBUG_RANDOM_SELECTOR = true;
const util = require('util');
/**
 * Random selector: Store objects and select objects randomly
 * @constructor
 * @param Arrays Targets 
 * @param Number MaxRate Selector will random from 0 to MaxRate to select object
 */
class FreequencyRandomSelector extends RandomSelector {
  constructor(Randomer) {
    super(Randomer)
    this.accumulateFrequencies = Array();
    this.frequencies = Array();
    this.totalFrequency = 0;
    this.elements = Array();
  }
  setElements(elements) {
    if (elements === undefined) {
      throw new Error('Error: invalid elements (undefined)!!!');
    }
    else if (elements === null) {
      throw new Error("Error: invalid elements (null)!!!");
    }
    else if (!Array.isArray(elements)) {
      throw new Error("Error: invalid elements (not an array)!!!");
    }

    ///Every element must has valid frequency: an possitive number
    var tempTotalFrequency = 0;
    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      if (!Array.isArray(element)) {
        throw new Error(util.format("Error: invalid element at index %i: %s (is not an array)", i, element));
      }
      if (element.length < 2) {
        throw new Error(util.format("Error: invalid element at index %i: %s (doesn't has freequency)", i, element));
      } 
      if(!Number.isInteger(element[1]))
      {
        throw new Error(util.format("Error: invalid element at index %i: %s (frequency is not a number)", i, element));
      }
      if(element[1] < 0)
      {
        throw new Error(util.format("Error: invalid element at index %i: %s (frequency is negative)", i, element));
      }

      this.elements.push(element[0]);
      this.frequencies.push(element[1]);
      tempTotalFrequency += element[1];
      this.accumulateFrequencies.push(tempTotalFrequency);
      
    }

    this.elements = elements;
    this.totalFrequency = tempTotalFrequency;
    this.debug('setElements: ', this.elements, this.totalFrequency);
  }
  setTotalFrequency(totalFrequency) {
    if(!Number.isInteger(totalFrequency))
    {
      throw new Error("totalFrequency must be an integer!");
    }
    if(totalFrequency<0)
    {
      throw new Error("totalFrequency cannot be negative!");
    }
    this.totalFrequency = totalFrequency;
  }
  getTotalFrequency() {
    return this.totalFrequency;
  }
  getFrequencies()
  {
    return this.frequencies;
  }
  getAccumulateFrequencies()
  {
    return this.accumulateFrequencies;
  }
  debug() {
    if (this.DEBUG) {
      console.log("[DEBUG]FreequencyRandomSelector: ", arguments);
    }
  }
};
module.exports = FreequencyRandomSelector;



