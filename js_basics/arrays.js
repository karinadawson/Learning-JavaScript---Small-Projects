const numbers = [1, 2, 3, 4];

const newNumbers = numbers.concat(5);

console.log(numbers[0]); // 1

console.log(numbers); // [1, 2, 3, 4]

console.log(newNumbers) // [1, 2, 3, 4, 5]

console.log(numbers.length) // 4

console.log(newNumbers.length) // 5


numbers.forEach((number) => {
    console.log(number);
})

console.log("--------------------------------")

const names = ["karina", "josh", "noah", "darcy"];

console.log(names.length)
console.log(names[1])

const newNames = names.concat("poppy")

console.log(newNames)
newNames.forEach((name) => {
    console.log(name);
})

console.log("--------------------------------")

const nums = [0,1,2,3,4,5,6,7,8,9,10];

let sum = 0
nums.forEach((num) => {
    sum += num
})

console.log(sum)

// another way of doing this sum function using reduce - reduce is array method that iterated through. 

let sum2 = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum2)