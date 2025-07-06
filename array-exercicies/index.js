const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const fruits = ["maracuja", "pera", "uva", "banana", "manga", "jabuticaba"];

//exercicie01
const mapToDouble = (numbers) => {
  return numbers.map((n) => n * 2);
};
console.log(`exercicie01: ${mapToDouble(numbers)}`);

//exercicie02
const pairNumbers = (numbers) => {
  return numbers.filter((n) => n % 2 === 0);
};
console.log(`exercicie02: ${pairNumbers(numbers)}`);

//exercicie03
const isHasFruit = (fruits, fruit) => {
  return fruits.includes(fruit);
};
console.log(`exercicie03: ${isHasFruit(fruits, "banana")}`);

//exercicie04
const sumNumbers = (numbers) => {
  return numbers.reduce((acc, current) => acc + current, 0);
};
console.log(`exercicie04: ${sumNumbers(numbers)}`);
