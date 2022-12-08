const path = require('path');
const fs = require('fs');

const data = fs.readFileSync(`./input.txt`, 'utf-8').split('\n');
const instructions = data.splice(10);

const stacks = require('./stacks');

// console.log(stacks);
// console.log(instructions);

let stacks1 = [...stacks];
let stacks2 = JSON.parse(JSON.stringify(stacks));

instructions.forEach(command => {
  let [, pop, , from, , to] = command.split(' ');
  from--;
  to--;
  // console.log('pop', pop, 'from', from, 'to', to);
  for (let step = 0; step < pop; step++) {
    const popped = stacks1[from].pop();
    stacks1[to].push(popped);
  }
});

const topOfStacks1 = stacks1.map(stack => stack.pop()).reduce((a, c) => a + c);

// Print answer to part one.
console.log(topOfStacks1);


instructions.forEach(command => {
  let [, pop, , from, , to] = command.split(' ');
  from--;
  to--;
  // console.log('pop', pop, 'from', from, 'to', to);
  const popped = stacks2[from].splice(-pop);
  stacks2[to].splice(stacks2[to].length, 0, ...popped);
});

const topOfStacks2 = stacks2.map(stack => stack.pop()).reduce((a, c) => a + c);

// Print answer to part two.
console.log(topOfStacks2);
