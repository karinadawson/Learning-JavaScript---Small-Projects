const promiseToGatherFruit = new Promise((resolve, reject) => {

    const fruit = "Pineapple";

    resolve(fruit);

}).then((fruit) => {

    return fruit.length;

}).then((fruitLength) => {

    console.log(fruitLength);

});


const fruitsArray = [];

const promiseToGatherFruit2 = new Promise((resolve, reject) => {

    const fruit = "Pineapple";

    resolve(fruit);

}).then((fruit) => {

    fruitsArray.push(fruit);
    console.log(fruitsArray);


});

