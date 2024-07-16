const batch = [1001, 1002, 1003, 1004];

const addToBatch = (batch, orderID) => {
    if (batch.length <= 4) {
    const new_batch = batch.concat(orderID)
    return new_batch;
    } else 
    return batch
}

console.log(addToBatch(batch, 1005))


module.exports = addToBatch



// ---------------------------------------------- another way (quicker) in addToBatch2:

const addToBatch2 = (batch, orderID) => {
    if (batch.length >= 5) {
    return batch;
    }
    
    return batch.concat(orderID)
}

console.log(addToBatch2(batch, 1005))


module.exports = addToBatch2