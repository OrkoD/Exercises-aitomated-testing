// 87. Даны наторальное n, m. Получить суму m последних цифр числа n.

const sumOfLastDigits = (n, m) => {
  if (m > n.toString().length)
    return 'Number "m" must be less or equal to quantity digins of number "n"';

  return n
    .toString()
    .slice(-m)
    .split("")
    .reduce((a, b) => +a + +b);
};

// 226. Даны натуральные числа m, n. Получить все их натуральные общие кратные, меньшие m*n.
const getAll = (m, n) => {
  const result = [];
  for (let i = m > n ? m : n; i <= m * n; i += 1) {
    if (i % m === 0 && i % n === 0) result.push(i);
  }
  return result;
};

// 559. Дано натуральное число n. Найти все меньшие n числа Мерсена
const mersenneNumbers = num => {
  const result = [];
  for (let i = 1; i <= 74207281; i += 1) {
    const mersenneNumber = 2 ** i - 1;
    if (mersenneNumber < num) {
      result.push(mersenneNumber);
    } else {
      break;
    }
  }
  return result;
};

module.exports.sumOfLastDigits = sumOfLastDigits;
module.exports.getAll = getAll;
module.exports.mersenneNumbers = mersenneNumbers;
