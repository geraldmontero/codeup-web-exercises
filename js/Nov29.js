function reverseString(str) { return str.split("")
    .reverse()
    .join();
    
}

console.log(reverseString("maggie"))


let weather = "wild"
    if (weather === "sunny") {
        console.log(" wear a shirt ");
    } else if (weather === "rainy") {
        console.log("bring umbrella")
    } else if (weather === "snowy") {
        console.log( "wear 10 jackets")
    }else {
        console.log( "wing it")
    }

    let myAge = 31;
        let actualAge = 21;
        
        function checkAge(givenAge , realAge) {
            if (givenAge === realAge) {
                console.log(" My age is my actual age")
            }else {
                console.log("thats cool")
            }
        }
        checkAge(myAge, actualAge);

        let studentOne = 90;
        let studentTwo = 70;
        let studentThree = 80;
        let studentFour = 90;
        let studentFive = 20;

    function letterGrade(studentGrade) {
        if (studentGrade >= 90) {
            console.log("A");
        }else if (studentGrade <=88 && studentGrade >= 80) {
            console.log("B");
        }else if (studentGrade <= 78 && studentGrade >= 70){
            console.log("C");
        }else if (studentGrade <= 68 && studentGrade >= 60){
            console.log("D")
        }else {
            console.log( "you failed")
        }
    }
letterGrade(studentOne)



