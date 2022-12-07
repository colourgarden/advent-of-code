const path = require('path');
const fs = require('fs');

const data = fs.readFileSync(`./input.txt`, 'utf-8');

// Convert each line into an array containing the four relevant numbers.
const pairs = data.split('\n').map(pair => Array.from(pair.split(',').flatMap(range => range.split('-').map(Number))));

// Part one calculation
// Is two contained within one? Or is one contained within two?
const overlappingElves = pairs.filter(([lower1, higher1, lower2, higher2]) => {
  return (
    lower2 >= lower1 && higher2 <= higher1
    || lower1 >= lower2 && higher1 <= higher2
  )
}).length;

// Print answer to part one.
console.log(overlappingElves);

// Possible one-liner
// console.log(pairs.filter(([lower1, higher1, lower2, higher2]) => lower2 >= lower1 && higher2 <= higher1 || lower1 >= lower2 && higher1 <= higher2).length);


// Part two calculation
// Does one overlap the boundaries of two? Or does two overlap the boundaries of one?
const notOverlappingElves = pairs.filter(([lower1, higher1, lower2, higher2]) => {
  return (
    lower1 < lower2 && higher1 < lower2
    || lower2 < lower1 && higher2 < lower1
  )
}).length;

// Print answer to part two.
console.log(pairs.length - notOverlappingElves);

// Possible one-liner
// console.log(pairs.filter(([lower1, higher1, lower2, higher2]) => lower1 < lower2 && higher1 < lower2 || lower2 < lower1 && higher2 < lower1)).length;
