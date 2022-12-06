const path = require('path');
const fs = require('fs');

const data = fs.readFileSync(`./input.txt`, 'utf-8');

const mappings = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
}

let result = [];

const bags = data.split('\n').map(bag => {
  const compartment1 = bag.substring(0, bag.length / 2);
  const compartment2 = bag.substring(bag.length / 2);
  // console.log(compartment1, compartment2);

  const set1 = new Set(compartment1.split(''))
  const set2 = new Set(compartment2.split(''))

  for (let char of set1.values()){
    if (set2.has(char)) result.push(char);
  }
});

let score = 0;
let score3 = 0;

result.forEach(char => {
  if (char == char.toLowerCase()) {
    score += mappings[char];
  }
  else {
    score = score + (mappings[char.toLowerCase()] + 26);
  }
});

// Log part one.
console.log(score);



function chunk (items, size) {
  const chunks = []
  items = [].concat(...items)

  while (items.length) {
    chunks.push(
      items.splice(0, size)
    )
  }

  return chunks
}

const elves = data.split('\n');
const groups = chunk(elves, 3);

let common = [];
groups.map(group => {
  const set1 = new Set(group[0].split(''))
  const set2 = new Set(group[1].split(''))
  const set3 = new Set(group[2].split(''))

  for (let char of set1.values()){
    if (set2.has(char) && set3.has(char)) common.push(char);
  }
});

let score2 = 0;

common.forEach(char => {
  if (char == char.toLowerCase()) {
    score2 += mappings[char];
  }
  else {
    score2 = score2 + (mappings[char.toLowerCase()] + 26);
  }
});

console.log(score2);
