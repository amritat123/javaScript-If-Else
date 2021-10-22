var readline=require("readline-sync")
let age=readline.questionInt("please enter your age:--")
if (age>=5){
    console.log(age,"In this age you can join school")
} if (age>=18){
    console.log(age,"in age can vote in elections.")
}if (age>=21){
    console.log(age,"In age can drive a car.")
}if(age>=25){
    console.log(age," In age can legally drink")
}else{
    console.log(age,"not defind age! you are  litle child")
}
