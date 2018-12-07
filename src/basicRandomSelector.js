require('./randomer')
class RandomSelector
{
    constructor(Randomer){
        this.randomer = Randomer;
    }
    debug (){
        if(DEBUG_RANDOM_SELECTOR){
            console.log("RandomSelector: ", arguments);
        }
    }
}
module.exports = RandomSelector;