const names = ['Anna', 'Li', 'Charlie', 'Mary', 'Jo'];

const isShorterThanThree = (name) => {
    if (name.length < 3) {
        return true;
    } else {
        return false;
    }
}

// 1. Using a predicate function and `filter` to get only names shorter than 3 letters.
const namesShorterThanThreeLetters = names.filter(isShorterThanThree);
console.log(namesShorterThanThreeLetters)


const getUppercased = (name) => {
    return name.toUpperCase();
}

// 2. Create a new array of all names uppercased by applying
// the `getUppercased` function to all elements in the `names` array.
const uppercasedNames = names.map(getUppercased);
console.log(uppercasedNames)


