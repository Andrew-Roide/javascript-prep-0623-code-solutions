const number1 = 10;
const number2 = 20;
const product = number1 * number2;
console.log('value of product:', product, typeof product);

const charge = 9;
const payment = 5;
const amountRemaining = payment - charge;
console.log(
  'value of amountRemaining:',
  amountRemaining,
  typeof amountRemaining
);

const tests = 90;
const assignments = 96;
const final = 80;
const grade = (tests + assignments + final) / 3;
console.log('value of grade:', grade, typeof grade);

const firstName = 'Andrew';
const lastName = 'Roide';
const fullName = `${firstName} ${lastName}`;
console.log('value of fullName:', fullName, typeof fullName);

const pH = 10;
const isAcidic = pH < 7;
console.log('value of isAcidic:', isAcidic, typeof isAcidic);

const numberOfSoldiers = 300;
const isSparta = numberOfSoldiers === 300;
console.log('value of isSparta:', isSparta, typeof isSparta);

let nickname = fullName;
nickname += ' is the goat';
console.log('value of nickname:', nickname, typeof nickname);
