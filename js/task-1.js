function isEnoughCapacity(products, containerSize) {
  let values = Object.values(products);
  let sum = 0;

  for (const value of values) {
    sum += value;
  }

  if (sum <= containerSize) {
    return true;
  }
  return false;
}
