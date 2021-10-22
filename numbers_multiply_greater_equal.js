var readline=require("readline-sync")
let number2=readline.questionInt("please enter the number:-")
var number1 = 44 * 30
if (number2>number1 || number2==number1){
    console.log(number2,"is greater than number1 or equal to number2")
}else{
    console.log(number2,"is lesser")
}