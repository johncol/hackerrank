function gradingStudents(grades = []) {
  const toRoundedGrades = grade => {
    const roundValue = 5 - (grade % 5);
    if (grade < 38 || roundValue > 2) {
      return grade;
    }

    return grade + roundValue;
  };

  return grades.map(toRoundedGrades);
}
