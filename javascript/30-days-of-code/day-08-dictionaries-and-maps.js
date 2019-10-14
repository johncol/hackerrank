const buildPhoneBook = (lines, cases) => {
  const phoneBook = {};

  for (let i = 1; i <= cases; i++) {
    const phoneBookEntry = lines[i].split(' ');
    const name = phoneBookEntry[0];
    const phoneNumber = phoneBookEntry[1];
    phoneBook[name] = phoneNumber;
  }

  return phoneBook;
};

const printPhonesQueried = (lines, cases, phoneBook) => {
  for (let i = 1 + cases; i < lines.length; i++) {
    const nameQueried = lines[i];
    const phoneNumber = phoneBook[nameQueried];
    console.log(phoneNumber ? `${nameQueried}=${phoneNumber}` : 'Not found');
  }
};

function processData(input) {
  const lines = input.split('\n');
  const cases = parseInt(lines[0], 10);

  const phoneBook = buildPhoneBook(lines, cases);
  printPhonesQueried(lines, cases, phoneBook);
}
