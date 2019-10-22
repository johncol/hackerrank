function printParsedNumber(string) {
  try {
    const number = Number.parseInt(string, 10);
    if (isNaN(number)) {
      throw new Error('Bad String');
    }
    console.log(number);
  } catch (e) {
    console.log(e.message);
  }
}
