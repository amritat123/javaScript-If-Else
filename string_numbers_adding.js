var rlSync = require('readline-sync');

let number1 = rlSync.questionInt('Enter the first number:---');
let number2 = rlSync.questionInt('Enter the second number:--');
var sum = number1+3-number2+1+"3";
console.log("The numbers",number1,"and",number2,"add to",sum);

