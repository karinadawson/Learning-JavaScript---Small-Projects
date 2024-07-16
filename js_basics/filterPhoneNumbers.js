const numbers = ["11111111111","22222222222","33333333333","44","55555555555","77777777777"]

const checkLength = (number) => {
    if (number.length === 11) {
        return true;
    } else {
        return false;
    }
}

const filterPhoneNumbers = (numbers) => {
    return numbers.filter(checkLength);
}



console.log(filterPhoneNumbers(numbers))

module.exports = filterPhoneNumbers


// ------------------------


const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

const generateMessages = (names) => {
    names.forEach((name) => {
        console.log(`Hi ${name}! 50% off our candies for you today!`)
    })
}

console.log(generateMessages(names))


// ------------------------ now using mapping instead of forEach:

const generateMessages2 = (names) => {

    return names.map((name) => {
        return `Hi ${name}! 50% off our candies for you today!`;
    });
};

console.log(generateMessages2(names));

// --------------------------- challenge:

const namesAndDiscounts = [
    { name: 'Anna', discount: 50 },
    { name: 'Laura', discount: 40 },
    { name: 'Josh', discount: 30 },
    { name: 'Min', discount: 50 },
    { name: 'Karla', discount: 60 }
  ];

  const generateMessages3 = (namesAndDiscounts) => {

    return namesAndDiscounts.map(({name, discount}) => {
        return `Hi ${name}! ${discount}% off our candies for you today!`;
    });
};

console.log(generateMessages3(namesAndDiscounts));