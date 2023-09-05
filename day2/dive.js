const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf-8').split('\n');

let depth = 0;
let horizontal = 0;

for(let i of input) {
  let sum = parseInt(i[1])
  if (i[0] == "forward") {
    horizontal += sum;
  }
  if (i[0] == "up") {
    depth -= sum;
  } 
  if (i[0] == "down") {
    depth += sum;
  }
}

return horizontal * depth;
