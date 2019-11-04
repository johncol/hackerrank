const getDateObject = (string = '') => {
  const [day, month, year] = string.split(' ').map(string => Number.parseInt(string));

  return {
    day,
    month,
    year,
    date: new Date(year, month, day)
  };
};

const getFine = (input = '') => {
  input = input.split('\n');
  const actual = getDateObject(input[0]);
  const expected = getDateObject(input[1]);

  if (actual.year < expected.year) {
    return 0;
  }

  if (actual.year === expected.year && actual.month < expected.month) {
    return 0;
  }

  if (
    actual.year === expected.year &&
    actual.month === expected.month &&
    actual.day <= expected.day
  ) {
    return 0;
  }

  if (actual.year > expected.year) {
    return 10000;
  }

  if (actual.month > expected.month) {
    return (actual.month - expected.month) * 500;
  }

  if (actual.day > expected.day) {
    return (actual.day - expected.day) * 15;
  }

  return 0;
};

function processData(input = '') {
  console.log(getFine(input));
}
