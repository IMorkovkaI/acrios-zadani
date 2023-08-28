const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8').split('\n').map(Number);

let count = 0;
const findIndex = (input) => { 
    for (let i = 0; i < input.length; i++) {
          if(input[i] < input[i+1]) {
            count++;
          }
      }
      return count;
    }
    
findIndex(input);
console.log(count);