const getNumberSign = (num) => {
    if (num > 0) {
        return "Positive"
    }
    else if (num === 0) {
        return "Zero"
    }
    else {
        return "Negative"
    }
}

console.log(getNumberSign(4))


