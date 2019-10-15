const CUMULUS = 0;

function jumpingOnClouds(clouds) {
  let count = 0;
  for (let i = 0; i < clouds.length - 1; ) {
    const nextCloud = i + 2;
    if (clouds[nextCloud] === CUMULUS) {
      i += 2;
    } else {
      i++;
    }
    count++;
  }
  return count;
}
