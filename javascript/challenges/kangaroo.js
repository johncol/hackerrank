const getMinMax = (x1, v1, x2, v2) => {
  const kangaroo1 = { x: x1, v: v1 };
  const kangaroo2 = { x: x2, v: v2 };
  if (x1 < x2) {
    return {
      min: kangaroo1,
      max: kangaroo2
    };
  }
  return {
    min: kangaroo2,
    max: kangaroo1
  };
};

function kangaroo(x1, v1, x2, v2) {
  if ((x1 > x2 && v1 > v2) || (x2 > x1 && v2 > v1)) {
    return 'NO';
  }

  if ((x1 === x2 && v1 !== v2) || (v1 === v2 && x1 !== x2)) {
    return 'NO';
  }

  const { min, max } = getMinMax(x1, v1, x2, v2);

  while (min.x < max.x) {
    min.x += min.v;
    max.x += max.v;
    if (min.x === max.x) {
      return 'YES';
    }
  }

  return 'NO';
}
