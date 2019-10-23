function circularArrayRotation(array, rotations, queries) {
  const { length: size } = array;
  rotations = rotations % size;
  const rotated = [];

  for (let index = 0; index < size; index++) {
    const newIndex = (index + size + rotations) % size;
    rotated[newIndex] = array[index];
  }

  return queries.map(query => rotated[query]);
}
