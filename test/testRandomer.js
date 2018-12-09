var assert = require('chai').assert;

var Randomer = require('../src/randomer');
var StatsArray = require('stats-array');
describe('Test randomer', function() {
    var randomer;
    before(function()
     {
        console.log("beforeSuite!", __dirname);
        randomer = new Randomer();
        Randomer.prototype.DEBUG = true;
      });
    beforeEach(function() {
        
    });
    after(function() {
        console.log("afterSuite!");
    });
    afterEach(function() {
        
    });
        
    describe('#getRandomInt()', function() {
        it("noError", function(){
            var testCount = 10000;
            for(var i=0;i<testCount;i++)
            {
                randomer.getRandomInt();
            }
        });
        it("Not generate negative number", function(){
            var testCount = 10000;
            var negNumbers = Array();
            var i=0;
            for(;i<testCount;i++)
            {
                var number = randomer.getRandomInt();
                if(number < 0)
                {
                    negNumbers.push(number);
                    
                }
                if(negNumbers.length>0){
                    new Error("Generated negative number " + negNumbers.toString())
                }
                
            }
        });
        it("Randomness: standard deviation larger than zero", function(){
            var testCount = 10000;
            var numbers = Array();
            var i=0;
            for(;i<testCount;i++)
            {
                numbers.push(randomer.getRandomInt());
            }
            var stdDev = numbers.stdDeviation(0.95);
            console.log(stdDev);
            assert(stdDev.value>0);
            assert(stdDev.upper>0);
            assert(stdDev.lower>0);
        });

        it("Randomness: mean around a half of max_int", function(){
            var testCount = 10000;
            var numbers = Array();
            for(i=0;i<testCount;i++)
            {
                numbers.push(randomer.getRandomInt());
            }
            var mean = numbers.mean();
            
            console.log("mean", mean);
            assert.isAtLeast(mean, randomer.MAX_INT*3/8);
            assert.isAtMost(mean, randomer.MAX_INT*5/8);

        });
    });
    
    describe('#getRandomIntBetween(min, max)', function() {
        it("Values not out of [min, max) range", function(){
            var testCount = 100000;
            var min = 0;
            var max = 100;
            var invalidNumber = Array(); 
            for(i=0;i<testCount;i++)
            {
                var random = randomer.getRandomIntBetween(min, max);
                if(random < min || random >= max)
                {
                    invalidNumber.push(random);
                }
            }
            if(invalidNumber.length > 0)
            {
                console.log("Invalid number", invalidNumber);
            }
            assert.equal(invalidNumber.length, 0, "No random number out of min max range");
        });
        it("Randomness: mean around avg of min/max", function(){

            var testCount = 10000;
            var numbers = Array();
            var min = 0;
            var max = 100;
            for(i=0;i<testCount;i++)
            {
                numbers.push(randomer.getRandomIntBetween(min, max));
            }
            var mean = numbers.mean();
            
            assert.isAtLeast(mean, 40);
            assert.isAtMost(mean, 60);
        });
        it("Generated values include min", function(){
            var testCount = 100000;
            var min = 0;
            var max = 10;
            var includeMin = 0;
            for(i=0;i<testCount;i++)
            {
                var random = randomer.getRandomIntBetween(min, max);
                if(random == min)
                {
                    includeMin = true;
                }
            }
            
            assert.isTrue(includeMin);
        });
        it("Generated value not include max", function(){
            var testCount = 100000;
            var min = 0;
            var max = 10;
            var includeMax = false;
            for(i=0;i<testCount;i++)
            {
                var random = randomer.getRandomIntBetween(min, max);
                if(random == max)
                {
                    includeMax = true;
                }
            }
            
            assert.isFalse(includeMax);
        });
    });

    describe('#getRandomIntBetween(min, max)', function() {
        

    });


    
});