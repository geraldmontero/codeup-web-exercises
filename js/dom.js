'use strict';

//Bom Intro

let sirius = {
    numStudents: 30,
    classroom: "Pedernales/remote",
    // methods - functions stored inside of an object

    takeAtendance: function (){

        prompt("How many students");
        return this.numStudents;
    },
    prompt:function () {
        //returns prompt window
    }
}

sirius.takeAtendance()

var favoriteNumber = 18;

function add(num1){
    var num2 = 10;
    return num1 + num2;

}

console.log(add(favoriteNumber));

