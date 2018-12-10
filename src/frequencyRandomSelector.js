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
    this.hasReplacement = true;
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
    this.frequencies = Array();
    this.elements = Array();
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
      
    }
    
    this.calculateAccumulateFrequency(true);
    this.debug('setElements: ', this.elements, this.frequencies, this.accumulateFrequencies, this.totalFrequency);
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
  select() {
    var selectedElement = null;
    if (this.hasReplacement) {
      selectedElement = this.selectWithReplacement();
    } else {
      selectedElement = this.selectWithoutReplacement();
    }

    this.debug("select", this.hasReplacement, selectedElement);
    return selectedElement;
  }
  calculateAccumulateFrequency(calculateTotalFreequency)
  {
    var tempTotalFrequency = 0;
    this.accumulateFrequencies = Array();

    for(let i=0;i<this.frequencies.length;i++)
    {
      tempTotalFrequency += this.frequencies[i];
      this.accumulateFrequencies.push(tempTotalFrequency);
    }
    
    if(calculateTotalFreequency)
    {
      this.totalFrequency = tempTotalFrequency;
    }

  }
  selectWithReplacement() {
    console.log('selectWithReplacement');
    var randomFrequency = this.randomer.getRandomIntBetween(0, this.totalFrequency);
    var selectedElement = null;
    var foundIdx = -1;
    for(let idx=0;idx<this.accumulateFrequencies.length;idx++)
    {
        if(randomFrequency<this.accumulateFrequencies[idx])
        {
          foundIdx = idx;
          selectedElement = this.elements[idx];
          break;
        }
    }
    this.debug("selectWithReplacement", randomFrequency, this.totalFrequency, foundIdx, selectedElement, this.accumulateFrequencies);
    return selectedElement;
  }
  selectWithoutReplacement() {
    var returnElement = null;
    var removeIndex = -1;
    if (this.elements.length > 0) {
      removeIndex = this.randomer.getRandomIntBetween(0, this.elements.length);
      returnElement = this.elements.splice(removeIndex, 1)[0];
    }
    this.debug("selectWithoutReplacement", removeIndex, returnElement, this.elements.length);
    return returnElement;
  }
  
  debug() {
    if (this.DEBUG) {
      console.log("[DEBUG]FreequencyRandomSelector: ", arguments);
    }
  }
};
module.exports = FreequencyRandomSelector;



