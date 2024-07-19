const Thermostat = require("./Thermostat");

describe("Test thermostat", () => {

    const therm = new Thermostat();
    it("Thermostat starts with an initial temperature of 20", () => {
        expect(therm.getTemperature()).toBe(20)
    });
    it("Thermostat returns 22 when up() is called twice", () => {
        therm.up()
        therm.up()
        expect(therm.getTemperature()).toBe(22)
    });
    it("Thermostat returns 21 when down() is called", () => {
        therm.down()
        expect(therm.getTemperature()).toBe(21)
    });
    it("Thermostat returns 10 when down called 12 times", () => {
        for (let i = 0 ; i < 12 ; i++) {
            therm.down();
          }
        expect(therm.getTemperature()).toBe(10)
    });
});


describe("Test powersave mode", () => {

    const therm2 = new Thermostat();
    it("Thermostat starts with an initial temperature of 20", () => {
        expect(therm2.getTemperature()).toBe(20)
    });
    it("Thermostat only reaches 25 when PS true and + by 6", () => {
        for (let i = 0 ; i < 6 ; i++) {
            therm2.up();
          }
        expect(therm2.getTemperature()).toBe(25)
    });
    it("Thermostat only reaches 32 when PS false and + by 9", () => {
        therm2.setPowerSavingMode(false)
        for (let i = 0 ; i < 9 ; i++) {
            therm2.up();
          }
        expect(therm2.getTemperature()).toBe(32)
    });
    it("Thermostat resets to 20", () => {
        therm2.reset()
        expect(therm2.getTemperature()).toBe(20)
    });
});


describe("Test energy usage", () => {

    const therm3 = new Thermostat();
    it("Energy usage returns low if < 18", () => {
        for (let i = 0 ; i < 3 ; i++) {
            therm3.down();
          }
        expect(therm3.getTemperature()).toBe(17)
        expect(therm3.reportEnergyUsage()).toBe("Low-usage")
    });
    it("Energy usage returns medium if > 18 and < 25", () => {
        for (let i = 0 ; i < 4 ; i++) {
            therm3.up();
          }
        expect(therm3.getTemperature()).toBe(21)
        expect(therm3.reportEnergyUsage()).toBe("Medium-usage")
    });
    it("Energy usage returns high if > 25", () => {
        therm3.setPowerSavingMode(false)
        for (let i = 0 ; i < 10 ; i++) {
            therm3.up();
          }
        expect(therm3.getTemperature()).toBe(31)
        expect(therm3.reportEnergyUsage()).toBe("High-usage")
    });

});