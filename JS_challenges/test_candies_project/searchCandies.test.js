const searchCandies = require("./searchCandies");

describe("searchCandies", () => {
    it("returns mars and maltesers", () => {
        expect(searchCandies("Ma", 10)).toEqual(["Mars", "Maltesers"]);
    });
    it("returns mars", () => {
        expect(searchCandies("Ma", 2)).toEqual(["Mars"]);
    });
    it("returns skitties, skittles, starburst", () => {
        expect(searchCandies("S", 10)).toEqual(['Skitties', 'Skittles', 'Starburst']);
    });
    it("returns skitties, skittles, starburst", () => {
        expect(searchCandies("S", 4)).toEqual(['Skitties', 'Skittles']);
    });
    it("returns skitties, skittles, starburst", () => {
        expect(searchCandies("s", 10)).toEqual(['Skitties', 'Skittles', 'Starburst']);
    });
});