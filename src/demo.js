const RandomSelector = require("./index");


console.log("--- Simulating rolling dice: ");
var diceSelector = RandomSelector.createSimpleSelectorWithReplacement([1, 2, 3, 4, 5, 6]);
var points = Array();
for(let i = 0;i<3;i++)
{
    points.push(diceSelector.select());
}
console.log("Total points after 3 rolls: ", points);
console.log("Dice after selecting: ", diceSelector.getElements());


console.log("--- Simulating flipping coin: ");
var flipSelector = RandomSelector.createSimpleSelectorWithReplacement(['Head', 'Tail']);
var faces = Array();
for(let i = 0;i<10;i++)
{
    faces.push(flipSelector.select());
}
console.log("Coin toss result: ", faces);


