'use strict'
function Randomer()
{
    
};
   
Randomer.prototype.getRandomInt = function(){
    return Math.floor(Math.random()*this.MAX_INT);
}
Randomer.prototype.getName = function(){
    return "DefaultRandomer";
}


/**
 * @param Number min minimum value (inclusive)
 * @param Number max maximum value (exclusive)
 */
Randomer.prototype.getRandomIntBetween = function(min, max){
    return Math.floor(Math.random()*(max-min))+min;
}


Randomer.prototype.MAX_INT = 2147483648;

module.exports = Randomer