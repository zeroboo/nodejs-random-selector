const SimpleRandomSelector = require('./simpleRandomSelector')
const DEBUG_RANDOM_SELECTOR_FACTORY = true;
function RandomSelectorFactory() {
   
   
}
RandomSelectorFactory.prototype.createRandomSelector = function(){
    return new SimpleRandomSelector();
} 
RandomSelectorFactory.prototype.debug = function(){
    if(DEBUG_RANDOM_SELECTOR_FACTORY){
            console.log("RandomSelectorFactory: ", arguments);
    }
}
module.exports = new RandomSelectorFactory();