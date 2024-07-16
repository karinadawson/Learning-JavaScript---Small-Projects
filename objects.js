const person = {
    name: 'Maxine',
    age: 32,
    address: 'London, E1 123'
  };
  

  console.log(person.name);
  console.log(person['name']);
  


  const bankAccount = {
  
    accountNumber: 376782676,
    accountSortCode: 999999,
    getBalance: () => {
      return 100;
    }
  };
  
  console.log(bankAccount.getBalance());



//   -------------

const person2 = {
    name: 'Maxine',
    age: 32,
    address: {
      city: 'London',
      postcode: 'E1 123'
    },
    hobbies: ['writing', 'tennis', 'cooking']
  };

  console.log(person2.address.city)
  console.log(person2.hobbies[1])

//    ---------------------------

const cohort = {
    name: "May 2024",
    id : 1234,
    students: ["Karina", "John", "Pete"]

}

const reportCohort = (cohort) => {
    console.log(cohort.id)
    console.log(cohort.name)
    console.log(cohort.students.length)
}

reportCohort(cohort)