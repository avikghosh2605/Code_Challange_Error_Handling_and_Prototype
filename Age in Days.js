function ageInDays(person) {
    const fullName = `${person.firstName} ${person.lastName}`;
    const ageInDays = person.age * 365; // assuming non-leap years
  
    return function() {
      console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}.`);
    };
  }

  



// const person = {
//    firstName: 'Mithun',
//    lastName: 'S',
//    age: 20,
// };

// function ageInDay(personObject, callback) {
//     const fullName = '${personObject.firstName} ${personObject.lastname}'
//     const ageInDays = person.age * 365;
//     callback(fullName, ageInDays);
// }

// function logResult(fullName, ageInDays) {
//     console.log('The person`s full is ${fullName} and their age in days is ${ageInDays}.');
// }

// //expected Output.

// ageInDays(person, logResult); // The person`s full name is Mithun S and their age in days is 7300.
