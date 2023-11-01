/* exported getValues */
function getValues(object) {
  const myArray = [];
  for (const property in object) {
    myArray.push(object[property]);
  }
  return myArray;
}
