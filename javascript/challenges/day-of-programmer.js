const isJulianLeap = year => year % 4 === 0;

const isGregorianLeap = year => {
  const mod4 = year % 4 === 0;
  const mod100 = year % 100 === 0;
  const mod400 = year % 400 === 0;
  return mod400 || (mod4 && !mod100);
};

const find256thDay = (year, isLeap) => {
  const day = isLeap(year) ? 12 : 13;
  return `${day}.09.${year}`;
};

function dayOfProgrammer(year = 0) {
  if (year === 1918) {
    return '26.09.1918';
  }

  const isLeapFn = year < 1918 ? isJulianLeap : isGregorianLeap;
  return find256thDay(year, isLeapFn);
}
