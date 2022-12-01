const input = await Deno.readTextFile("input.txt");

const elves = input.split("\n\n").map((elf) => elf.split("\n").map(Number));

const topThree = elves.sort((a, b) => b.reduce((acc, c) => acc + c, 0) - a.reduce((acc, c) => acc + c, 0)).slice(0, 3);
const totalCalories = topThree.reduce((acc, elf) => acc + elf.reduce((acc, c) => acc + c, 0), 0);

console.log(totalCalories);