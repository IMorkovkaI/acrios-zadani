const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8').split(',');

for (let i = 0; i < 80; i++) {
    let fish = 0;
    for(let j = 0; j < input.length; j++) {
        input[j] -= 1
        if(input[j] < 0) {
            input[j] = 6
            fish += 1
        }
    }
    for(let k = 0; k < fish; k++) {
        input.push(8)
    }
} 
console.log(input.length)