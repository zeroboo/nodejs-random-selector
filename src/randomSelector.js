
const DEBUG_RANDOM_SELECTOR = true;

/**
 * Random selector: Store objects and select objects randomly
 * @constructor
 * @param Arrays Targets 
 * @param Number MaxRate Selector will random from 0 to MaxRate to select object
 */
function RandomSelector (Targets, MaxRate){
  this.debug("Constructor", Targets, MaxRate);

  this.targets = new Array();
  this.targetsAccumulateRate = new Array();
  
  verifyParameters(Targets, MaxRate)
  applyTargets(Targets);
};

RandomSelector.prototype.verifyParameters = function(Targets, MaxRate){
  if(Targets === null)
  {
    throw Error('Invalid parameters');
  }
}


RandomSelector.prototype.applyTargets = function(Targets){
  this.targets = new Array();
  var idx = arr.length;
  while (idx--) {
      this.targets.push(targets[idx][0]);
      this.targetsAccumulateRate.push(targets[idx][1]);
  }
  this.debug("applyTarget.targets", this.targets);
  this.debug("applyTarget.rates", this.targetsAccumulateRate);


}

RandomSelector.prototype.debug = function (){
  if(DEBUG_RANDOM_SELECTOR){
    console.log("RandomSelector: ", arguments);
  }
}


RandomSelector.prototype.select = function (){

}


module.exports = RandomSelector;