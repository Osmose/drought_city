export function randInt(a, b) {
  return Math.floor(Math.random() * (b - a + 1) + a);
}

export function roll(count, size, add) {
  let sum = add;
  for (let i = 0; i < count; i++) {
    sum += randInt(1, size);
  }
  return sum;
}
