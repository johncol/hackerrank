const countAsIn = string => {
  return [...(string.match(/(a)/g) || [])].length;
};

function repeatedString(string, n) {
  if (n < string.length) {
    string = string.substr(0, n);
  }

  const remainderLetters = n % string.length;
  const stringRepetition = (n - remainderLetters) / string.length;

  const matchesInString = countAsIn(string);
  const matchesInReminder = countAsIn(string.substr(0, remainderLetters));

  return matchesInString * stringRepetition + matchesInReminder;
}
