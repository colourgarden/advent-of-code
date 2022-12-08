const path = require('path');
const fs = require('fs');

const stream = fs.readFileSync(`./input.txt`, 'utf-8');

// const stream = 'mjqjpqmgbljsphdztnvjfqwrcgsmlb';
// const stream = 'bvwbjplbgvbhsrlpgdmjqwftvncz';
// const stream = 'nppdvjthqldpwncqszvftbrmjlhg';
// const stream = 'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg';
// const stream = 'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw';

const chars = stream.split('');

let start1 = 0;
let end1 = 4;
while (true) {
  const marker = chars.slice(start1, end1);
  const check = new Set(marker).size === marker.length;
  if (check) break;
  start1++;
  end1++
}

// Print answer to part one.
console.log(end1);


let start2 = 0;
let end2 = 14;
while (true) {
  const marker = chars.slice(start2, end2);
  const check = new Set(marker).size === marker.length;
  if (check) break;
  start2++;
  end2++
}

// Print answer to part two.
console.log(end2);
