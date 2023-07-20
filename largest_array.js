var arr = [2, 45, 3, 67, 34, 567, 34, 345, 123];
var check_number = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > check_number) {
    check_number = arr[i];
  }
}
console.log(`${check_number} is the largest number in array`);
