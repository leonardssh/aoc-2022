const input = await Deno.readTextFile("input.txt");

const elves = input.split("\n\n").map((elf) => elf.split("\n").map(Number));

const mostCalories = elves.reduce((acc, elf) => {
  const calories = elf.reduce((acc, c) => acc + c, 0);
  return calories > acc ? calories : acc;
}, 0);

console.log(mostCalories);