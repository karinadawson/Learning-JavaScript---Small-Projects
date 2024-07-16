class User {

    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    getIntroduction() {
        return `Hi my name is ${this.name}`
    }
  }

const user = new User("Karina")

console.log(user.getName())
console.log(user.getIntroduction())

module.exports = User



