class Student {

    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }

    getName() {
        return this.name;
    }

    getSubject() {
        return `Hi my name is ${this.name} and I am studying ${this.subject}`
    }
  }

const student = new Student("Karina", "Software Development")

console.log(student.getName())
console.log(student.getSubject())

module.exports = Student
