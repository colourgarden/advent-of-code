const path = require('path');
const fs = require('fs');

const stream = fs.readFileSync(`./input.txt`, 'utf-8');
const chars = stream.split('');

function findMarkerInStream(markerLength) {
  let start = 0;
  let end = markerLength;
  while (true) {
    const marker = chars.slice(start, end);
    const check = new Set(marker).size === marker.length;
    if (check) break;
    start++;
    end++
  }
  return end;
}

// Print answer to part one.
console.log(findMarkerInStream(4));

// Print answer to part two.
console.log(findMarkerInStream(14));
