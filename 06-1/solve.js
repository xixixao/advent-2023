const example = [
  [7, 9],
  [15, 40],
  [30, 200],
];

const input = [
  [44, 283],
  [70, 1134],
  [70, 1134],
  [80, 1491],
];

const allPossible = input.map(([time, record]) => {
  const possible = [];

  for (let i = 0; i < time; i++) {
    const held = i;
    const travel = (time - held) * held;
    if (travel > record) {
      possible.push(travel);
    }
  }

  return possible;
});

console.log(allPossible);

const result = allPossible.reduce((acc, cur) => acc * cur.length, 1);

console.log(result);
