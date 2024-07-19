const Candy = require("./Candy")

describe("candy", () => {
    it("returns correct candy name and price", () => {
        const candy = new Candy("Mars", 2.99);
        expect(candy.getName()).toBe("Mars");
        expect(candy.getPrice()).toBe(2.99);
    })
})