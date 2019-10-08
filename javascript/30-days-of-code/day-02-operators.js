function calculateTotalPrice(mealCost, tipPercent, taxPercent) {
  const total = Math.round(mealCost * ((100 + tipPercent + taxPercent) / 100));
  console.log(total);
}
