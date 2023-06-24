function whileLoop1() {
  const myArray = [];
  let n = 0;

  while (n < 10) {
    myArray.push(n);
    n++;
  }
  return myArray;
}
console.log('whileLoop1 output', whileLoop1());

function whileLoop2() {
  const myArray = [];
  let n = 0;

  while (n < 10) {
    myArray.push(n * 2);
    n++;
  }
  return myArray;
}
console.log('whileLoop2 output', whileLoop2());

function forLoop1() {
  const myArray = [];
  for (let i = 0; i < 10; i++) {
    myArray.push(i);
  }
  return myArray;
}
console.log('forLoop1 output', forLoop1());

function forLoop2() {
  for (let i = 100; i > 0; i--) {
    console.log('Time till explosion', i);
  }
}
forLoop2();

const object = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

function forInLoop1(object) {
  const myArray = [];
  for (const property in object) {
    myArray.push(property);
  }
  return myArray;
}
console.log('forInLoop1 output', forInLoop1(object));

function forInLoop2(object) {
  const myArray = [];
  for (const property in object) {
    myArray.push(object[property]);
  }
  return myArray;
}
console.log('forinLoop2 output', forInLoop2(object));
