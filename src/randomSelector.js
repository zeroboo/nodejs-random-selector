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

        this.debug('RandomSelector.Constructor', this.randomer.getName(), this.hasReplacement);
    }
    setRelacementMode(hasReplacement) {
      this.hasReplacement = hasReplacement;
    }
    debug (){
        if(this.DEBUG){
            console.log("[DEBUG]RandomSelector: ", arguments);
        }
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

    }
    


}
module.exports = RandomSelector;