const path = require('path');
const fs = require('fs');

// Get input data of groups of numbers separated by blank lines.
// const data = fs.readFileSync(`./example.txt`, 'utf-8');
const data = fs.readFileSync(`./input.txt`, 'utf-8');

const lefts = [];
const rights = [];

// Create two arrays containing the numbers in the left/right columns.
data.split('\n').forEach((line) => {
  const [left, right] = line.replace(/\s+/g, ' ').split(' ');
  lefts.push(left);
  rights.push(right);
});

// Order the left/right columns.
const sort = (a, b) => a - b;
const leftsOrdered = lefts.sort(sort);
const rightsOrdered = rights.sort(sort);

// Compare each item in left column with its corresponding right column index.
// Add the differences together.
const part1 = leftsOrdered.map((digit, index) => {
  return Math.abs(digit - rightsOrdered[index]);
}).reduce((acc, val) => acc + val, 0);

console.log(`Part one: ${part1}`);

// For each left column item, multiply it by the number of occurences in the right column.
// Add the multiplications together.
const part2 = lefts.map(digit => {
  const matches = rights.filter(num => num === digit);
  return digit * matches.length;
}).reduce((acc, val) => acc + val, 0);

console.log(`Part two; ${part2}`);
