class Person {
  constructor(firstName, lastName, id) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = id;
  }

  printPerson() {
    console.log(`Name: ${this.lastName}, ${this.firstName}\nID: ${this.idNumber}`);
  }
}

class Student extends Person {
  constructor(firstName, lastName, id, scores = []) {
    super(firstName, lastName, id);
    this.scores = scores;
  }

  calculate() {
    const average = this.average();

    if (90 <= average && average <= 100) {
      return 'O';
    }

    if (80 <= average) {
      return 'E';
    }

    if (70 <= average) {
      return 'A';
    }

    if (55 <= average) {
      return 'P';
    }

    if (40 <= average) {
      return 'D';
    }

    return 'T';
  }

  average() {
    const total = this.scores.reduce((total, score) => total + score, 0);
    return total / this.scores.length;
  }
}
