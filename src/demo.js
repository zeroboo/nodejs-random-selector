'use strict'
const selectorFactory = require("./index");

console.log("----- Simulating selecting balls from a bag without returning: ");
var normalBag = selectorFactory.createSimpleSelectorWithoutReplacement([
    {color:'red'}, 
    {color:'black'}, 
]);
console.log("Selected ball: ", normalBag.select());
console.log("Selected ball: ", normalBag.select());
console.log("You've got no balls when try to select: ", normalBag.select(), ", ball left: ", normalBag.getElementCount());;


console.log("----- Simulating selecting balls from a bag with returning: ");
var magicBag = selectorFactory.createSimpleSelectorWithReplacement([
    {color:'red', id:'left'}, 
    {color:'black', id:'right'}, 
]);
console.log("ball checked: ", magicBag.select());
console.log("ball checked: ", magicBag.select());
console.log("Still have balls: ", magicBag.getElements().length);

console.log("----- Simulating rolling dice: ");
var dice = selectorFactory.createSimpleSelectorWithReplacement([1, 2, 3, 4, 5, 6]);
var points = Array();
for(let i = 0;i<10;i++)
{
    points.push(dice.select());
}
console.log("Total points after 10 rolls: ", points);

console.log("----- Simulating a love checker build in daisy: ");
var daisy = selectorFactory.createSimpleSelectorWithoutReplacement([]);
for(let i=0;i < daisy.getRandomer().getRandomIntBetween(4, 8);i++)
{
    daisy.getElements().push('petal');
}
var meter = true;
while(daisy.select()!=null)
{
    console.log(meter?'He loves me':'He loves me not');
}
if(!meter){
    console.log("He fuckin' hates me, try another daisy!");
}

console.log("----- Simulating flipping coin: ");
var chigurhCoin = selectorFactory.createSimpleSelectorWithReplacement(['Head', 'Tail']);
console.log("Your call: ", chigurhCoin.select());

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
    ] ///Total frequency is 1200
);
console.log("Prize: ", fortuneWheel.select());

///A cheated wheel with 0.5% chance to get 1000$, 50 % chance to get 10$, 49.5% to get stuck (select return null)
console.log("A cheated wheel: pretty sure that player won't get big prize!");
var realWheel = selectorFactory.createFrequencySelectorWithReplacement(
    [['1000$', 50]
        , ['10$', 5000]
    ]
    , 10000///basispoint based 
);
console.log("Prize: ", realWheel.select());




