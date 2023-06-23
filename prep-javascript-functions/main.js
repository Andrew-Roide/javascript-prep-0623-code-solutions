// ---------addTwoNumbers-------

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var addTwoNumbersResults = addTwoNumbers(10, 10);
console.log('result:', addTwoNumbersResults);

// ---------convertHoursToMinutes-------

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var convertHoursToMinutesResults = convertHoursToMinutes(3);
console.log('result:', convertHoursToMinutesResults);

// ---------getGreeting-------

function getGreeting(name) {
  return `${name} there!`;
}

var getGreetingResult = getGreeting('Hello');
console.log(getGreetingResult, 'General Kenobi, you are a bold one!');

// ---------addAndMultiplyBy5-------

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var addAndMultiplyBy5Result = addAndMultiplyBy5(10, 10);
console.log(addAndMultiplyBy5Result);

// ---------multiplyAndDivideBy5-------

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var multiplyAndDivideBy5Reslut = multiplyAndDivideBy5(10, 10);
console.log(multiplyAndDivideBy5Reslut);

// ---------subtractTwoNumbers-------

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtractTwoNumbersReslut = subtractTwoNumbers(10, 10);
console.log(subtractTwoNumbersReslut);

// ---------getCircleCircumference-------

function radius(number) {
  return 2 * Math.PI * number;
}

var radiusResult = radius(10);
console.log(radiusResult);

// ---------getFullName-------

function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

var getFullNameResult = getFullName('Obi-wan', 'Kenobi');
console.log(getFullNameResult);

// ---------cube-------

function cube(number) {
  return Math.pow(number, 3);
}

var cubeResult = cube(10);
console.log(cubeResult);
