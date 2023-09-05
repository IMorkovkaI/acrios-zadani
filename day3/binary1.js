const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8').split('\n');

let x = 0;
let maxValue = [];
let minValue = [];

while (x < input[0].length) {
    let zero = 0;
    let one = 0;
    for (let i of input) {
      if (parseInt(i[x]) === 0) {
        zero++;
      } else if (parseInt(i[x]) === 1) {
        one++;
      }
    }
    if (zero > one) {
        maxValue.push(0);
        minValue.push(1);
    } else {
        maxValue.push(1);
        minValue.push(0);
    }
    x++;
  }

  let gamma = parseInt(maxValue.join(""), 2);
  let epsilon = parseInt(minValue.join(""), 2);

console.log(gamma * epsilon);


