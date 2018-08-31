const param = process.argv.slice(2).map(i => +i);

const getAllMultNumbers = (m, n) => {
  const result = [];
  for (let i = m > n ? m : n; i <= m * n; i += 1) {
    if (i % m === 0 && i % n === 0) result.push(i);
  }
  return result;
};

console.log(`Відповідь: ${getAllMultNumbers(param[0], param[1])}`);
