const numbers = [1, 2, 4, 6, 8, 9, -4, 7, 60, 10, 9, 12, 61];
const animals = ["Lion", "Monkey", "Zebra", "Tiger", "Camel"];

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
