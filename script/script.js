// Створіть функцію випадкових цілих чисел

function getRandomArray(lengths, min, max) {
  let result = [];
  for (let i = 0; i < lengths; i++) {
    const randomNumb = (Math.random() * (max - min) + min).toFixed(0);
    result.push(Number(randomNumb));
  }
  return result;
}
console.log(getRandomArray(15, 1, 100));


// Створіть функцію яка рахує середнє арифметичне

const arr = [2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
const getAverage = (arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(0);
console.log(getAverage);


// Створіть функцію яка рахує медіану всіх переданих в неї аргументів.

function getMedian(numbers) {
  const sortNum = Array.from(numbers).sort((a, b) => a - b);
  const middle = Math.floor(sortNum.length / 2);
  if (sortNum.length % 2 === 0) {
    return (sortNum[middle - 1] + sortNum[middle]) / 2;
  }
  return sortNum[middle];
}
console.log(getMedian([6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]));


// Створіть функцію яка фільтрує парні числа передані як аргументи функції.

const evenNumb = [1, 2, 3, 4, 5, 6];
function filterEvenNumbers(num) {
  for (let i = 2; num > i; i++) {
    if (num % 2 === 0) {
      return false;
    }
  }
  return num % 2 !== 0;
}
console.log(evenNumb.filter(filterEvenNumbers));


// Створіть функцію яка порахує кількість чисел

const numbers = [1, -2, 3, -4, -5, 6];
function countPositiveNumbers(num) {
  const countNumber = numbers.filter((item) => item > 0).length;
  {
    return countNumber;
  }
}
console.log(countPositiveNumbers(numbers));


// Створіть функцію яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5

const getDividedByFive = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
function getDividedNumber(num) {
  for (let i = 0; num > i; i++) {
    if (num % 5 !== 0) {
      return false;
    }
    if (num % 5 === 0) {
      return true;
    }
  }
}
console.log(getDividedByFive.filter(getDividedNumber));
