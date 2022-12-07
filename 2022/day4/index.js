const path = require('path');
const fs = require('fs');

const data = fs.readFileSync(`./input.txt`, 'utf-8');

const pairs = data.split('\n');

const overlappingElves = pairs.filter(pair => {
  const [elf1, elf2] = pair.split(',');
  const [lower1, higher1] = elf1.split('-').map(number => parseInt(number));
  const [lower2, higher2] = elf2.split('-').map(number => parseInt(number));

  // Is two contained within one?
  if (lower2 >= lower1 && higher2 <= higher1) {
    return true;
  }

  // Is one contained within two?
  if (lower1 >= lower2 && higher1 <= higher2) {
    return true;
  }
});

// Print answer to part one.
console.log(overlappingElves.length);


const notOverlappingElves = pairs.filter(pair => {
  const [elf1, elf2] = pair.split(',');
  const [lower1, higher1] = elf1.split('-').map(number => parseInt(number));
  const [lower2, higher2] = elf2.split('-').map(number => parseInt(number));

  // Does one overlap the boundaries of two?
  if (lower1 < lower2 && higher1 < lower2) {
    return true;
  }

  // Does two overlap the boundaries of one?
  if (lower2 < lower1 && higher2 < lower1) {
    return true;
  }
});

// Print answer to part two.
console.log(pairs.length - notOverlappingElves.length);
