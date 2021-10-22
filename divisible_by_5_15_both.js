let readline=require("readline-sync")
var number=readline.questionInt("please enter the number:--")
if (number%5==0 && number%15==0){
console.log(number,"is divisible by both ");
}
else{
console.log(number,"not divible by both");
}