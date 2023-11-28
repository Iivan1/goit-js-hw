function calcAverageCalories(days) {
  let sumCalories = 0;
  let values = Object.values(days);

  for (const value of values) {
    sumCalories += value.calories;
  }
  return sumCalories / days.length;
}
