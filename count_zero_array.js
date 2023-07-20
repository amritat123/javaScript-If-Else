var arr = [
  [0, 1, 1],
  [0, 1, 0],
  [1, 0, 0],
];
count = 0;
for (i = 0; i < arr.length; i++) {
  for (j = 0; j < arr[i].length; j++) {
    if (arr[i][j] === 0) {
      count++;
    }
  }
}
console.log(count);
