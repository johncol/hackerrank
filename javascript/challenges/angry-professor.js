function angryProfessor(min, arrivalTimes) {
  const attendees = arrivalTimes.filter(time => time <= 0).length;
  const classIsCanceled = attendees < min ? 'YES' : 'NO';
  return classIsCanceled;
}
