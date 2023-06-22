var arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  for (let j = 0; j < arr[0]; j++) {
    console.log(arr[i][j]);
  }
}
