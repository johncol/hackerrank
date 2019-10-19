function countApplesAndOranges(
  hourseStart,
  houseEnd,
  appleTree,
  orangeTree,
  apples,
  oranges
) {
  const applesInsideHouse = apples.filter(apple => {
    const landingPosition = appleTree + apple;
    return hourseStart <= landingPosition && landingPosition <= houseEnd;
  }).length;
  console.log(applesInsideHouse);

  const orangesInsideHouse = oranges.filter(orange => {
    const landingPosition = orangeTree + orange;
    return hourseStart <= landingPosition && landingPosition <= houseEnd;
  }).length;
  console.log(orangesInsideHouse);
}
