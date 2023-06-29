/* exported getWords */
function getWords(string) {
  if (!string) {
    return [];
  }

  const words = string.split(' ');
  return words;
}
