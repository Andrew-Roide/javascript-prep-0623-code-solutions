/* exported getKeys */
function getKeys(object) {
  const myArray = [];
  for (const property in object) {
    myArray.push(property);
  }
  return myArray;
}
