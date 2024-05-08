// Requirements
const fs = require('fs');
const jsc = require('jsverify');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

// Original functions
function factorialTest(n) {
    if(n === 0) return 1;
    else return n * factorial(n - 1);
}

function eTest(n) {
    if(n === 0) return 1;
    else return 1.0 / factorialTest(n) + e(n - 1);
}

// Tests
const eulerTest = jsc.forall("nat", function(n) {
    return (e(n) === eTest(n));
});

const factTest = jsc.forall("nat", function(n) {
    return (factorial(n) === factorialTest(n));
});

// Asserts
assert(eulerTest);
assert(factTest);
assert(factorial(10) === 3628800);
assert(e(10) === 2.7182818011463845);
