const RandomSelector = require("./index");

console.log("--- Simulating rolling dice: ");
var diceSelector = RandomSelector.createSimpleRandomSelector([1, 2, 3, 4, 5, 6]);
var points = Array();
for(let i = 0;i<3;i++)
{
    points.push(diceSelector.selectWithReplacement());
}
console.log("Total points after 3 rolls: ", points);

console.log("--- Simulating flipping coin: ");
var flipSelector = RandomSelector.createSimpleRandomSelector(['Head', 'Tail']);
for(let i = 0;i<10;i++)
{
    console.log('Flip: ', flipSelector.selectWithReplacement());
}

