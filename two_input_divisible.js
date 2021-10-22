var readline=require("readline-sync")
var varx =readline.questionInt("enter the first number:--")
var vary=readline.questionInt("enter the secound number:---")
if (varx%vary==0){
    console.log("yes\nit is divisible numbers")
} 
else{
    console.log("sorry\nnot divisible numbers")
}