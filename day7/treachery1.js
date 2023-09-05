const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8').split(',');

input.sort((a,b) => a - b)

let middle = input[input.length / 2]
let fuel = 0
input.forEach(crabs => (fuel += Math.abs(middle - crabs)))

console.log(fuel);
