

# random-selector

A nodejs module for randomly selecting objects


# Status

[![NPM](https://nodei.co/npm/random-selector.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/random-selector/)


![CircleCI](https://circleci.com/gh/zeroboo/nodejs-random-selector.svg?style=svg)
![travis-ci](https://travis-ci.org/zeroboo/nodejs-random-selector.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/zeroboo/nodejs-random-selector/badge.svg?branch=master)](https://coveralls.io/github/zeroboo/nodejs-random-selector?branch=master)
![Downloads](https://img.shields.io/npm/dt/random-selector.svg)

# Features
- Selecting objects with & without replacement 
- Select objects with different frequencies

# Build

On project folder run
```npm
npm install
```
Run tests
```npm
npm test
```
Run demo
```npm
npm start
```


# Usage

### Install to your project:
```npm
npm install random-selector
```

### Require the selector factory
```javascript
const selectorFactory = require("random-selector");
```

### Examples of creating selectors
    
1. Blindly pick out balls in a bag without returning
```javascript
var normalBag = selectorFactory.createSimpleSelectorWithoutReplacement([
    {color:'red'}, 
    {color:'black'}, 
]);
console.log("Selected ball: ", normalBag.select());
console.log("Selected ball: ", normalBag.select());
console.log("Bag now empty, you've got no balls to select: ", normalBag.select());
```

2. Blindly pick out balls in a bag then return to the bag
```javascript
var magicBag = selectorFactory.createSimpleSelectorWithReplacement([
    {color:'red', id:'left'}, 
    {color:'black', id:'right'}, 
]);
console.log("Ball checked: ", magicBag.select());
console.log("Ball checked: ", magicBag.select());
console.log("Still have balls: ", magicBag.select());
```

3. [Flipping an unbiased coin](https://en.wikipedia.org/wiki/Coin_flipping)
```javascript
var chigurhCoin = selectorFactory.createSimpleSelectorWithReplacement(['Head', 'Tail']);
console.log("The most you ever lost in a coin toss? ", chigurhCoin.select());
```
    
4. Simulating rolling dice
```javascript
var dice = selectorFactory.createSimpleSelectorWithReplacement([1, 2, 3, 4, 5, 6]);
var points = Array();
for(let i = 0;i<10;i++)
{
    points.push(dice.select());
}
console.log("Total points after 10 rolls: ", points);
```

5. [daisy meter: a interpersonal relationship evaluation tool bases on nature](https://en.wikipedia.org/wiki/He_loves_me..._he_loves_me_not)
```javascript
var daisy = selectorFactory.createSimpleSelectorWithoutReplacement([]);
for(let i=0;i < daisy.getRandomer().getRandomIntBetween(4, 8);i++)
{
    daisy.getElements().push('petal');
}
var meter = true;
while(daisy.select()!=null)
{
    meter = !meter;
    console.log(meter?'He loves me':'He loves me not');
}
if(!meter){
    console.log("He fuckin' hates me, try another daisy!");
}

```    

6. Simulating wheel of fortune:
![Image Wheel of Fortune](./doc/img/wheel_fortune.jpg)
```javascript
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
    ] ///Total frequency is 120
);
console.log("Prize: ", fortuneWheel.select());
```    
  
```javascript
///A cheated wheel with 0.5% chance to get 1000$, 50 % chance to get 10$, 49.5% to get stuck (return null)
var realWheel = selectorFactory.createFrequencySelectorWithReplacement(
    [['1000$', 50]
        , ['10$', 5000]
    ]
    , 10000 /*total frequency > sum of all element's freequency: it means selecting may failed (return null)*/
);
console.log("Prize: ", realWheel.select());
```

    
    
    
