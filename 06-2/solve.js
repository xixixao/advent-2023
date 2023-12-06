// Time:        44707080
// Distance:   283113411341491

// console.log(37069767 - 7637313);

let x = 0;
for (let i = 0; i < 44707080; i++) {
  const held = i;
  const travel = (44707080 - held) * held;
  if (travel > 283113411341491) {
    x++;
  }
}

console.log(x);
