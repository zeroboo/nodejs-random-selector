const RandomSelector = require('./randomSelector');
const DEBUG_RANDOM_SELECTOR = true;

/**
 * Random selector: Store objects and select objects randomly
 * @constructor
 * @param Arrays Targets 
 * @param Number MaxRate Selector will random from 0 to MaxRate to select object
 */
class FreequencyRandomSelector extends RandomSelector
{
  constructor(Randomer)
  {
    super(Randomer)
  }
  debug (){
    if(this.DEBUG){
        console.log("[DEBUG]FreequencyRandomSelector: ", arguments);
    }
}
};
module.exports = FreequencyRandomSelector;



