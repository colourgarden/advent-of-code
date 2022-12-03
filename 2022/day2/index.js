const path = require('path');
const fs = require('fs');

const data = fs.readFileSync(`./input.txt`, 'utf-8');

const games = data.split('\n').map(game => game.replace(' ', ''));

// Each game is a code which can be assigned a result.
const part1Scores = {
  AX: 4,
  AY: 8,
  AZ: 3,
  BX: 1,
  BY: 5,
  BZ: 9,
  CX: 7,
  CY: 2,
  CZ: 6,
};

const part2Scores = {
  AX: 3,
  AY: 4,
  AZ: 8,
  BX: 1,
  BY: 5,
  BZ: 9,
  CX: 2,
  CY: 6,
  CZ: 7,
};

// Get score for each game and tally.
const calcScores = (scores, total = 0) => {
  games.forEach(game => total += scores[game]);
  return total;
};

// Print part one.
console.log(calcScores(part1Scores));

// Print part two.
console.log(calcScores(part2Scores));
