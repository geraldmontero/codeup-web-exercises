$("#p-one")
console.log($("#p-one"))

//
// let heading = $("#heading")
// console.log(heading)
//
// // add a class of border
// $("#p-one").addClass("border");

// add a border if logged in
// check value of is logged in
//grab value of isloggedin
//save to a variable
//compare value og logged in to true
//add a border
// assign a class to the element, if true


let user1 = {
    name: "Gerald",
    isLoggedIn : true,
    age: 31
}

let loginStatus = user1.isLoggedIn;

if(loginStatus === true){
    $("#heading").addClass("border")
}
$(document).ready(function() {
    alert( 'The DOM has finished loading!' );
});