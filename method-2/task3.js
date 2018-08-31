const readline = require(`readline`);
const arr = [];

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

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt(`enter some number> `);
rl.prompt();

rl.on(`line`, line => {
  if (line === "") rl.close();
  const input = line.split(` `).map(i => +i);
  if (input.length !== 1) console.log(`It is required to enter only 1 number:`);

  const result = mersenneNumbers(input[0]);
  arr.push(result);
  console.log(`Result is: ${result}`);

  rl.setPrompt(`enter another number> `);
  rl.prompt();
}).on(`close`, () => {
  console.log(`Good job! Your all results is: \n ${arr.join(`, `)}`);
  process.exit(0);
});
