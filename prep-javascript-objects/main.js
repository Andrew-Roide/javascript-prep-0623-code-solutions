const person = {
  firstName: 'Andrew',
  lastName: 'Roide',
  hobby: 'reading',
};
console.log(person);

const fullName = `The person's name is: ${person.firstName} ${person.lastName}`;
console.log(fullName);

person.job = 'billing clerk';
console.log(`The person's current job is ${person.job}`);

person['previousJob'] = 'customer service';
console.log(`The person's pervious job was ${person.previousJob}`);

console.log(person);
