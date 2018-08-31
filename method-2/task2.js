const readline = require(`readline`);
const arr = [];

const getAllMultNumbers = (m, n) => {
  const result = [];
  for (let i = m > n ? m : n; i <= m * n; i += 1) {
    if (i % m === 0 && i % n === 0) result.push(i);
  }
  return result;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt(`enter 2 numbers> `);
rl.prompt();

rl.on(`line`, line => {
  if (line === "") rl.close();
  const input = line.split(` `).map(i => +i);
  if (input.length !== 2) console.log(`It is required to enter 2 numbers:`);

  const result = getAllMultNumbers(input[0], input[1]);
  arr.push(result);
  console.log(`Result is: ${result}`);

  rl.setPrompt(`enter another 2 numbers> `);
  rl.prompt();
}).on(`close`, () => {
  console.log(`Good job! Your all results is: \n ${arr.join(`, `)}`);
  process.exit(0);
});
