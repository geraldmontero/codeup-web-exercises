"use strict"
// 1//
let first = 100
let second = 200
let third = 138
function averageScore(scoreOne,scoreTwo,scoreThree) {return ((scoreOne + scoreTwo +scoreThree) / 3 )

}

console.log( averageScore(first,second,third))
//2//
function bestScore(topScore) { if (topScore % 5== 0 || topScore % 3 == 0){
    console.log("true")
}else {
    console.log("false");
}

}

console.log(bestScore(300))
//3//
function bowlName(name) {return (name.toUpperCase())

}

console.log(bowlName("ThEbEsTbOwLiNgPlAcEever"))
//4//
let score = 109
let name = "Bowling is Fun"
let isBowlingfun = true
let players = [ "tom", "jerry" , "Garfield"]

function findType(variable) { return typeof variable;

}
/*
console.log(findType(score))
console.log(findType(name))
console.log(findType(isBowlingfun))
console.log(findType(players))
*/
//5//
function executeAll() {
    console.log(averageScore(110,200,100))
    console.log(bestScore(251))
    console.log(findType(score))
    console.log(findType(name))
    console.log(findType(isBowlingfun))
    console.log(findType(players))
    console.log(bowlName("ThEbEsTbOwLiNgPlAcEever"))

    
}

executeAll()
//6//
function myFunction(firstName, lastName) {
return (firstName + lastName) };

function thatsNotMyName(name) {
    if (name == "Laura") {
        return ("that's me!, I'm " + name)
    } else {
        return "that's not my name"
    }
}

console.log(myFunction("gerald", " montero"))
console.log(thatsNotMyName("Gerald"))