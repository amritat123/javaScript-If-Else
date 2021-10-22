
var readlines=require("readline-sync")
var sub_name=readlines.question("enter the subject name:- ")
let subject2="english";
let subject1="hindi";

if (sub_name==subject1){
    console.log("this is first subject of class");
}else if (sub_name==subject2){
    console.log("this subject is for comunication")
}else{
    console.log("unless this subject is not in class.")
}
