const RandomSelector = require('./randomSelector');
const DEBUG_RANDOM_SELECTOR = true;

/**
 * Random selector: Store objects and select objects randomly
 * @constructor
 * @param Arrays Targets 
 * @param Number MaxRate Selector will random from 0 to MaxRate to select object
 */
class SimpleRandomSelector extends RandomSelector {
  constructor(Randomer) {
    super(Randomer)
    this.hasReplacement = true;
  }
  
  setRelacementMode(hasReplacement) {
    this.hasReplacement = hasReplacement;
  }
  setElements(elements)
    {
        if(elements === undefined)
        {
            throw new Error('Error: invalid elements (undefined)!!!');
        }
        else if(elements === null)
        {
            throw new Error("Error: invalid elements (null)!!!");
        }
        else if(!Array.isArray(elements))
        {
            throw new Error("Error: invalid elements (not an array)!!!");
        }
        else{
            this.elements = elements;
        }
        this.debug('setElements: ', this.elements);
    }
  hasRelacementMode() {
    return this.hasReplacement;
  }
  select() {
    if (this.hasReplacement) {
      return this.selectWithReplacement();
    } else {
      return this.selectWithoutReplacement();
    }
  }
  selectWithReplacement() {
    var index = this.randomer.getRandomIntBetween(0, this.elements.length);
    this.debug("selectWithReplacement", index, this.elements.length);
    return this.elements[index];
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
  debug (){
    if(this.DEBUG){
        console.log("[DEBUG]SimpleRandomSelector: ", arguments);
    }
}

};

module.exports = SimpleRandomSelector;



