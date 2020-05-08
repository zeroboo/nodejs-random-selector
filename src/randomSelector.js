'use strict'
const Randomer = require('./randomer');
class RandomSelector
{
    constructor(randomer){
        if(randomer == undefined)
        {
            this.randomer = new Randomer();
        }
        else
        {
            this.randomer = randomer;
        }
        this.hasReplacement = true;
        this.elements=[];
        this.debug('RandomSelector.Constructor', this.randomer.getName(), this.hasReplacement);
    }
    setRelacementMode(hasReplacement) {
      this.hasReplacement = hasReplacement;
      this.debug("setReplacementMode", this.hasReplacement);
    }
    hasRelacementMode() {
        return this.hasReplacement;
    }
    
    debug (){
        if(this.DEBUG){
            console.log("[DEBUG]RandomSelector: ", arguments);
        }
    }
    
    setElements(elements)
    {
        
    }
    /**
     * get number of elements
     * 
     */
    getElementCount()
    {
        return this.elements.length;
    }
    getElements()
    {
        return this.elements;
    }

    select()
    {
        return null;
    }
    selectWithoutReplacement()
    {
        return null;
    }
    selectWithReplacement()
    {
        return null;
    }

    getRandomer()
    {
        return this.randomer;
    }
}
module.exports = RandomSelector;