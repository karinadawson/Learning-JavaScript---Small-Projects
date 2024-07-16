const batch = [1001,1002,1003]

const addToBatch2 = (batch, orderID) => {
    if (batch.length >= 5) {
    return batch;
    }
    
    return batch.concat(orderID)
}

console.log(addToBatch2(batch, 1005))


module.exports = addToBatch2