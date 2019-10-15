function timeConversion(string = '12:00:00AM') {
  const center = string.substring(2, string.length - 2);
  const hour = parseInt(string.substring(0, 2), 10) % 12;

  if (string.endsWith('AM')) {
    return (hour < 10 ? `0` : ``) + `${hour}` + center;
  }

  return hour + 12 + center;
}
