

# random-selector
A nodejs module contains utilities for randomly selecting elements
# Status
[![CircleCI](https://circleci.com/gh/zeroboo/nodejs-random-selector.svg?style=svg)](https://circleci.com/gh/zeroboo/nodejs-random-selector)
[![travis-ci]](https://travis-ci.org/zeroboo/nodejs-random-selector.svg?branch=master)

# Features
- Selecting elements with & without replacement 
- Select elements with different frequencies
---
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

---
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
console.log("Bag now empty, no ball left to be selected: ", normalBag.select());
```

    2. Blindly pick out balls in a bag with returning
```javascript
var magicBag = selectorFactory.createSimpleSelectorWithReplacement([
    {color:'red', id:'left'}, 
    {color:'black', id:'right'}, 
]);
console.log("Selected ball: ", magicBag.select());
console.log("Selected ball: ", magicBag.select());
console.log("Still have balls: ", magicBag.select());
```

    3. Simulating rolling dice
```javascript
var dice = selectorFactory.createSimpleSelectorWithReplacement([1, 2, 3, 4, 5, 6]);
var points = Array();
for(let i = 0;i<10;i++)
{
    points.push(dice.select());
}
console.log("Total points after 10 rolls: ", points);
```

    4. Flipping coin
![Image of flipping coin](./doc/img/fipping_coin.jpg)
```javascript
var chigurhCoin = selectorFactory.createSimpleSelectorWithReplacement(['Head', 'Tail']);
console.log("Your call: ", chigurhCoin.select());
```

[    5. daisy meter](https://en.wikipedia.org/wiki/He_loves_me..._he_loves_me_not)
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
    ] ///Total frequency is 1200
);
console.log("Prize: ", fortuneWheel.select());
```    
```javascript
///A cheated wheel with 0.5% chance to get 1000$, 50 % chance to get 10$, 49.5% to get stuck (return null)
var realWheel = selectorFactory.createFrequencySelectorWithReplacement(
    [['1000$', 50]
        , ['10$', 5000]
    ]
    , 10000///basispoint based 
);
console.log("Prize: ", realWheel.select());
```

    
    
    
