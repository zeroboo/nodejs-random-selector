global.__base = __dirname + '/';
console.log("Current folder: ", global.__base);
const RandomSelector = require("./index");


var balls = Array()[{color: 'red'}
    , {color: 'red'}
    , {color: 'red'}
];

var selector = RandomSelector.createRandomSelector([
        [{color: 'red'}, 1000]
        , [{color: 'red'}, 1000]
    ]
    , 1000
);
console.log(balls)