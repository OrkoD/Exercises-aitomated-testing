const param = process.argv.slice(2).map(i => +i);

const sumOfLastDigits = (n, m) => {
  if (m > n.toString().length)
    return `Number "m" must be less or equal to quantity digins of number "n"`;

  return n
    .toString()
    .slice(-m)
    .split("")
    .reduce((a, b) => +a + +b);
};

console.log(`Відповідь: ${sumOfLastDigits(param[0], param[1])}`);
