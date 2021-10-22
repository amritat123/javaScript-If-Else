var readline=require("readline-sync")
let fill_water=readline.questionInt("please fill the water tank ,how much water you fill:-")
if (fill_water<1){
    console.log("there is more water we have to fill in water tank")
}else if (fill_water>1 && fill_water<10){
    console.log("no need to fill the water in water tank","\nthere is water:")
} else{
    console.log("opes!\nwater is overflowed from water tank")
}