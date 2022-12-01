const path = require('path');
const fs = require('fs');

// Get input data of groups of numbers separated by blank lines.
const data = fs.readFileSync(`./input.txt`, 'utf-8');

// Convert the individual lines of each group to Numbers and tally.
const elves = data.split('\n\n').map(group => {
  return group
    .split('\n')
    .map(group => Number(group))
    .reduce((total, calories) => total + calories);
});

// Find the biggest number in the resultant array.
const most = Math.max(...elves);

// Get the index of the biggest number.
const who = elves.indexOf(most);

// Print answer to part one.
console.log(`Elf ${who} is carrying the most calories. They are carrying ${most} calories.`);

// Sort values by descending.
const sorted = [...elves].sort((a, b) => b - a);

// Get three biggest numbers and tally.
const topThree = sorted.slice(0, 3).reduce((total, calories) => total + calories);

// Print answer to part two.
console.log(topThree);
