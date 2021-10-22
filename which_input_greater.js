var readline=require("readline-sync")
let var1=readline.questionInt("enter the number:-")
let var2=readline.questionInt("enter the secound number:-")
if (var1>var2){
    console.log(var1,"is greater than ",var2)
}
else{
    console.log(var2,"is greater than",var1)
}