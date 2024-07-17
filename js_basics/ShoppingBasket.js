class ShoppingBasket {

    constructor(items) {
        this.items = [];
        
    }

    addItem = (candy) => {
        this.items.push(candy)
    }

    getTotalPrice = () => {
        let sum = 0;
        for (let candy of this.items) {
        sum += candy.getPrice();
        }
        return sum
    }

}

module.exports = ShoppingBasket;