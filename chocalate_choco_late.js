var readline =require("readline-sync")
var number1=readline.questionInt("enter the number:-")
if(number1%3 === 0){
   console.log("choco")
}
else if(number1%7==0){
   console.log("late")
}
else if(number1%3==0 && number1%7==0){
   console.log("Chocolate")
}
else{
   console.log("Not divisible by 3 , 7")
}
