class ShoppingBasket {

    constructor(items) {
        this.items = [];
        this.discount = 1
        
    }

    addItem = (candy) => {
        this.items.push(candy)
    }

    getTotalPrice = () => {
        let totalPrice = 0;
        for (let candy of this.items) {
        totalPrice += candy.getPrice();
    } 
        totalPrice -= this.discount
        return totalPrice
    }

    displayBasket = () => {
        return this.items
        
}}

module.exports = ShoppingBasket;