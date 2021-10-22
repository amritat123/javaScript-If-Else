var readline=require("readline-sync")
var num=readline.questionInt("enter any which number you want:-")
if (num<10){
    console.log(num,"is less than 10")
}if (num>10 && num<20){
    console.log(num,"is less than 20")
}else if (num>20){
    console.log(num,"is greater then 20")
}