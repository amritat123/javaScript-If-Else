var readlines=require("readline-sync")
var number1=readlines.questionInt("enter the number:-");
var number2=readlines.questionInt("enter the secound numbeer:-")

if (number1>number2){
    console.log(number1,"is greater than",number2);

}else if (number1<number2){
    console.log(number1,"is less than",number2);

}else{
    console.log("both are queal number ")
}

