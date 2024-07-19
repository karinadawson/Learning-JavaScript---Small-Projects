const ShoppingBasket = require("./ShoppingBasket")
const Candy = require("./Candy")

describe("shoppingBasket", () => {
    it("adds items and reflects in basket", () => {
        const shoppingBasket = new ShoppingBasket;
        const bounty = new Candy("Bounty", 2.55)
        const twix = new Candy("Twix", 1.99)
        shoppingBasket.addItem(bounty)
        shoppingBasket.addItem(twix)
        expect(shoppingBasket.displayBasket()).toEqual([
            {name : "Bounty", price: 2.55}, 
            {name : "Twix", price : 1.99}])
        expect(shoppingBasket.getTotalPrice()).toEqual(3.54)
    });
})