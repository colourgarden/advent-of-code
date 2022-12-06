const path = require('path');
const fs = require('fs');

const data = fs.readFileSync(`./input.txt`, 'utf-8');

// Map letters to ASCII decimals and return priority.
// a-z is range 97-122, A-Z is range is 65-90.
// Priority runs a-z+A-Z. Maps to 1-26+27-52, hence capitals offset by 26.
function mapLetterToPriority(letter) {
  const offset = letter == letter.toLowerCase() ? 96 : 38;
  return letter.charCodeAt(0) - offset;
}

// Return letter that is shared between each compartment in a bag.
const sharedLettersInBags = data.split('\n').map(bag => {
  const compartment1 = bag.substring(0, bag.length / 2);
  const compartment2 = bag.substring(bag.length / 2);

  const set1 = new Set(compartment1.split(''))
  const set2 = new Set(compartment2.split(''))

  for (let char of set1.values()) {
    if (set2.has(char)) return char;
  }
});

// Map shared letters to a priority value and tally them up.
const score1 = sharedLettersInBags.map((char) => mapLetterToPriority(char)).reduce((a, c) => a + c, 0);

// Print answer to part one.
console.log(score1);


function chunk (items, size) {
  const chunks = [];
  items = [].concat(...items);
  while (items.length) {
    chunks.push(items.splice(0, size));
  }
  return chunks;
}

// Split elves up into groups of three.
const elves = data.split('\n');
const groups = chunk(elves, 3);

// Find the common letter/item between the elves in each group.
const commonGroupItem = groups.map(group => {
  const set1 = new Set(group[0].split(''))
  const set2 = new Set(group[1].split(''))
  const set3 = new Set(group[2].split(''))

  for (let char of set1.values()){
    if (set2.has(char) && set3.has(char)) return char;
  }
});

// Map common letter to a priority value and tally them up.
const score2 = commonGroupItem.map((char) => mapLetterToPriority(char)).reduce((a, c) => a + c, 0);

// Print answer to part two.
console.log(score2);
