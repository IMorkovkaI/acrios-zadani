const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8').split('\n').map(Number);

let count = 0;
const sonarSweep1 = (input) => { 
    for (let i = 0; i < input.length; i++) {
          if(input[i] < input[i+1]) {
            count++;
          }
      }
      return count;
    }

const sonarSweep2 = (input) => {
  for (let i = 1; i < input.length-2; i++) {
    let cur = input[i-1] + input[i] + input[i+1];
    let next = input[i] + input[i+1] + input[i+2];
    if(cur < next) {
      count ++;
    }
  }
}
