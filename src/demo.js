const selectorFactory = require("./index");

console.log("----- Simulating selecting balls from a bag without returning: ");
var bagsNormal = selectorFactory.createSimpleSelectorWithoutReplacement([
    {color:'red'}, 
    {color:'black'}, 
    {color:'red'}, 
]);
console.log("Selected ball: ", bagsNormal.select());
console.log("Selected ball: ", bagsNormal.select());
console.log("Selected ball: ", bagsNormal.select());
console.log("Bag now empty, no ball selected: ", bagsNormal.select());

console.log("----- Simulating selecting balls from a bag with returning: ");
var bagsNormal = selectorFactory.createSimpleSelectorWithoutReplacement([
    {color:'red'}, 
    {color:'black'}, 
    {color:'red'}, 
]);
console.log("Selected ball: ", bagsNormal.select());
console.log("Selected ball: ", bagsNormal.select());
console.log("Selected ball: ", bagsNormal.select());
console.log("Still have ball selected: ", bagsNormal.select());




console.log("----- Simulating rolling dice: ");
var diceSelector = selectorFactory.createSimpleSelectorWithReplacement([1, 2, 3, 4, 5, 6]);
var points = Array();
for(let i = 0;i<10;i++)
{
    points.push(diceSelector.select());
}
console.log("Total points after 10 rolls: ", points);


console.log("----- Simulating flipping coin: ");
var flipSelector = selectorFactory.createSimpleSelectorWithReplacement(['Head', 'Tail']);
var faces = Array();
for(let i = 0;i<10;i++)
{
    faces.push(flipSelector.select());
}
console.log("Coin toss result: ", faces);

console.log("----- Simulating lucky wheel: each bonus has the same frequency");
var fortuneWheel = selectorFactory.createFrequencySelectorWithReplacement(
    [['1000$', 10]
        , ['750$', 10]
        , ['150$', 10]
        , ['400$', 10]
        , ['250$', 10]
        , ['800$', 10]
        , ['100$', 10]
        , ['450$', 10]
        , ['300$', 10]
        , ['600$', 10]
        , ['200$', 10]
        , ['350$', 10]
        , ['1000$', 10]
    ] ///Total frequency is 1200
);

for(let i = 0;i<10;i++)
{
    console.log("Bonus: ", fortuneWheel.select());
}



