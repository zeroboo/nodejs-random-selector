const RandomSelector = require('./randomSelector');
const DEBUG_RANDOM_SELECTOR = true;

/**
 * Random selector: Store objects and select objects randomly
 * @constructor
 * @param Arrays Targets 
 * @param Number MaxRate Selector will random from 0 to MaxRate to select object
 */
class SimpleRandomSelector extends RandomSelector
{
  constructor(Randomer)
  {
    super(Randomer)
  }
  setFunc (Targets, MaxRate){
    this.debug("Constructor", Targets, MaxRate);

    this.targets = new Array();
    this.targetsAccumulateRate = new Array();
    
    verifyParameters(Targets, MaxRate)
    applyTargets(Targets);
  }
  verifyParameters()
  {
    if(Targets === null)
    {
      throw Error('Invalid parameters');
    }
  }
  applyTargets(Targets)
  {
    this.targets = new Array();
    var idx = arr.length;
    while (idx--) {
        this.targets.push(targets[idx][0]);
        this.targetsAccumulateRate.push(targets[idx][1]);
    }
    this.debug("applyTarget.targets", this.targets);
    this.debug("applyTarget.rates", this.targetsAccumulateRate);
  }
};

module.exports = SimpleRandomSelector;



