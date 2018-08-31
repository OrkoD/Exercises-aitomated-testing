const param = process.argv.slice(2).map(i => +i);

function mersenneNumbers(num) {
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
}

console.log(`Відповідь: ${mersenneNumbers(param[0])}`);
