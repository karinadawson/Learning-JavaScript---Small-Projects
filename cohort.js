class Cohort {

    constructor(students) {
        this.students = students;
    
    }

    count() {
        return this.students.length;
    }

    getNames() {
        return this.students.map((student) => student.getName())
    }

    getSubjects() {
        return this.students.map((student) => student.getSubject())
    }
}

module.exports = Cohort