function migratoryBirds(sightings = []) {
  const countings = [];

  sightings.forEach(sighting => {
    countings[sighting] = (countings[sighting] || 0) + 1;
  });

  let max = {
    value: -1,
    index: -1
  };

  for (let index in countings) {
    if (countings[index] > max.value) {
      max = {
        value: countings[index],
        index
      };
    }
  }

  return max.index;
}
