const fizzBuzz = require("./fizzBuzz");

const fizzBuzzUntil = (end_num) => {
    for (let i = 0 ; i <= end_num ; i++) {
        console.log(fizzBuzz(i));
    }
}

console.log(fizzBuzzUntil(27))