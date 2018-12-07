global.__base = __dirname + '/';
console.log("Current folder: ", global.__base);
const RandomSelector = require("./randomSelector");

var selector = new RandomSelector();

var balls = Array()[{color: 'red'}
    , {color: 'red'}
    , {color: 'red'}
];

var selector = new RandomSelector([
        [{color: 'red'}, 1000]
        , [{color: 'red'}, 1000]
    ]
    , 1000
);
console.log(balls)