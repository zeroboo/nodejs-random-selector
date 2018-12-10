# random-selector
A nodejs module contains utilities for randomly selecting elements in a collection.

# Features
- Selecting 
- Selecting with frequency
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
---
# Usage
Install to your project:
```npm
npm install random-selector
```
### Create a selector:

### Create a selector with frequency:

### Use custom randomer

### Testing with TestRandomer


# Examples
    
    1. Blindly pick out balls in a bag without returning

    2. Blindly pick out balls in a bag with returning
    
    3. Simulating rolling dice
```javascript
const RandomSelector = require("random-selector");
console.log("--- Simulating rolling dice: ");
var diceSelector = RandomSelector.createSimpleRandomSelector([1, 2, 3, 4, 5, 6]);
var points = Array();
for(let i = 0;i<3;i++)
{
    points.push(diceSelector.selectWithReplacement());
}
console.log("Total points after 3 rolls: ", points);
```
    3. Simulating flipping coin
![Image of flipping coin](./doc/img/fipping_coin.jpg)

    
    4. Simulating wheel of fortune:
![Image Wheel of Fortune](./doc/img/wheel_fortune.jpg)
    
    
    
    
