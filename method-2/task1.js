const readline = require(`readline`);
const arr = [];

const sumOfLastDigits = (n, m) => {
  if (m > n.toString().length)
    return `Number "m" must be less or equal to quantity digins of number "n"`;

  return n
    .toString()
    .slice(-m)
    .split("")
    .reduce((a, b) => +a + +b);
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

  const result = sumOfLastDigits(input[0], input[1]);
  arr.push(result);
  console.log(`Result is: ${result}`);

  rl.setPrompt(`enter another 2 numbers> `);
  rl.prompt();
}).on(`close`, () => {
  console.log(`Good job! Your all results is: ${arr.join(`, `)}`);
  process.exit(0);
});
