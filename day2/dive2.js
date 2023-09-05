const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf-8').split('\n').map((instruction) => instruction.split(' '));

let depth = 0;
let horizontal = 0;
let aim = 0;

for (let i of input) {
    let sum = parseInt(i[1])
    if(i[0] == "forward") {
        horizontal += sum;
		depth += aim * sum;
        }
    if(i[0] == "up") {
        aim -= sum;
    }
    if(i[0] == "down") {
        aim += sum;
    }
    }
return depth * horizontal;