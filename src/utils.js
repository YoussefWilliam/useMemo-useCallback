export const isPrime = (number) => {
  const max = Math.ceil(Math.sqrt(number));

  if (number === 2) {
    return true;
  }

  for (let i = 2; i <= max; i++) {
    if (number % i === 0) return false;
  }
  return true;
};
