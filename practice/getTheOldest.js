const people = [
  { name: "Carly", yearOfBirth: 2018 },
  { name: "Ray", yearOfBirth: 1962, yearOfDeath: 2011 },
  { name: "Jane", yearOfBirth: 1912, yearOfDeath: 1941 },
];
const findTheOldest = (people) => {
  const thisYear = new Date().getFullYear();
  return people.reduce(
    (allPersons, person) => {
      const age = (person.yearOfDeath || thisYear) - person.yearOfBirth;
      return age > allPersons.age ? { person, age } : allPersons;
    },
    { person: null, age: 0 }
  ).person;
};
