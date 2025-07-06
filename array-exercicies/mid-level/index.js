const numbers = [1, 2, 4, 6, 8, 9, -4, 7, 60, 10, 9, 12, 61];
const animals = ["Lion", "Monkey", "Zebra", "Tiger", "Camel, Amora"];

//exercicie06
const firstNumberGreaterThanTen = (numbers) => {
  return numbers.find((n) => n > 10);
};
console.log(`exercice06: ${firstNumberGreaterThanTen(numbers)}`);

//exercice:07
const hasNegativeNumber = (numbers) => {
  return numbers.some((n) => n < 0);
};
console.log(`exercicie07 ${hasNegativeNumber(numbers)}`);

//exercice:08
const allStringsStartWithUperCase = (array) => {
  return array.every((i) => /^[A-Z]/.test(i));
};
console.log(`exercice08: ${allStringsStartWithUperCase(animals)}`);

//exercice09
const ascendingOrder = (numbers) => {
  return numbers.sort((a, b) => a - b);
};
console.log(`exercice09: ${ascendingOrder(numbers)}`);

const descendingOrder = (numbers) => {
  return numbers.sort((a, b) => b - a);
};
console.log(`exercice09: ${descendingOrder(numbers)}`);

//exercice10
const lastThreeElement = (array) => {
  if (array.length < 3) return array;
  return array.slice(array.length - 3);
};
const numbers2 = [1, 2, 4, 6, 8, 9, -4, 7, 60, 10, 9, 12, 61];
const twoElements = [1, 2];
console.log(lastThreeElement(numbers2));
