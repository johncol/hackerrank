const weird = 'Weird';
const notWeird = 'Not Weird';

function conditionals(n) {
  if (n % 2 === 1) {
    console.log(weird);
  } else {
    if (n >= 2 && n <= 5) {
      console.log(notWeird);
    } else if (n >= 6 && n <= 20) {
      console.log(weird);
    } else if (n > 20) {
      console.log(notWeird);
    }
  }
}
