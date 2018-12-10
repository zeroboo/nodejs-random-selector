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

        this.debug('randomer', this.randomer.getName());
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
    selectAndReplace()
    {
        var index = this.randomer.getRandomIntBetween(0, this.elements.length);
        this.debug("selectAndReplace", index, this.elements.length);
        return this.elements[index];
    }

}
module.exports = RandomSelector;