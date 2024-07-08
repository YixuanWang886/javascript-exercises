const findTheOldest = function (people) {
  people.forEach((person) => {
    if (!person.yearOfDeath) {
      person.yearOfDeath = new Date().getFullYear(); // Correctly sets the current year
    }
    person.lifeSpan = person.yearOfDeath - person.yearOfBirth;
  });
  people.sort((a, b) => b.lifeSpan - a.lifeSpan); // Sorts in descending order of life span
  return people[0]; // Returns the name of the oldest person
};

// const people = [
//   {
//     name: "Carly",
//     yearOfBirth: 2018,
//   },
//   {
//     name: "Ray",
//     yearOfBirth: 1962,
//     yearOfDeath: 2011,
//   },
//   {
//     name: "Jane",
//     yearOfBirth: 1912,
//     yearOfDeath: 1941,
//   },
// ];
// console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
