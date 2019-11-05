function main() {
  const N = parseInt(readLine(), 10);
  const list = [];
  for (let NItr = 0; NItr < N; NItr++) {
    const firstNameEmailID = readLine().split(' ');
    const firstName = firstNameEmailID[0];
    const emailID = firstNameEmailID[1];
    list.push({ firstName, emailID });
  }

  list
    .filter(person => person.emailID.endsWith('@gmail.com'))
    .map(person => person.firstName)
    .sort((name1, name2) => (name1 < name2 ? -1 : 1))
    .forEach(name => console.log(name));
}
