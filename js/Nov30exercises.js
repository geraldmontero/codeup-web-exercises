"use strict"

function averageScore(scoreOne,scoreTwo,scoreThree) {return ((scoreOne + scoreTwo +scoreThree) / 3 )

}

console.log( averageScore(100,300,78))

function bestScore(topScore) { if (topScore % 5== 0 || topScore % 3 == 0){
    console.log("true")
}else {
    console.log("false");
}

}

console.log(bestScore(300))

function bowlName(name) {return (name.toUpperCase())

}

console.log(bowlName("ThEbEsTbOwLiNgPlAcEever"))

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

let myFunction (firstName, lastName) return firstName + lastName; };

function thatsNotMyName(name){ if(name = "Laura"){ return "that's me!, I'm " + "name"} } else { return "that's not my name" }
