class Thermostat {
    constructor() {
        this.temperature = 20
        this.powerSave = true
    }
    
    
    getTemperature() {
        return this.temperature
    } 

    up() {
        if(this.powerSave === true) {
            if(this.temperature <= 24) {
            this.temperature += 1
            }
        } else {
            if(this.temperature <= 31) {
            this.temperature += 1
            }
        }
    }

    down() {

        if(this.temperature >= 11) {
            this.temperature -= 1
        }
    }

    setPowerSavingMode(bool) {

        if (typeof bool === "boolean") {
            this.powerSave = bool;
        }

    }

    reset() {
        this.temperature = 20
    }

    reportEnergyUsage() {
        if(this.temperature <= 18) {
            return "Low-usage"
        } 
        else if(this.temperature > 18 && this.temperature <= 25) {
            return "Medium-usage"
        }
        else {
            return "High-usage"
        }
    }
}




module.exports = Thermostat