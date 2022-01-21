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


// let user1 = {
//     name: "Gerald",
//     isLoggedIn : true,
//     age: 31
// }
//
// let loginStatus = user1.isLoggedIn;
//
// if(loginStatus === true){
//     $("#heading").addClass("border")




// alert the dom
// $(document).ready(function() {
//     alert( 'The DOM has finished loading!');
// });
// alert($('#first'));
// alert($('#first').get(0));

// $('#p-one').click(function () {
//     alert($('#p-one').text())
// })
//
// // remove class
// $("#p-one").removeClass("codeup")
// // add a border
// $(".codeup").css('border','1px solid red')

// $("li").css({"font-size":"20px", "color":"red"} )
// //
// // $("p").css({"background":"yellow"} )
// // $("h1").css({"background":"yellow"} )
// // $("li").css({"background":"yellow"} )
// alert($('h1').text())
//
//
// $("p, h1, li ").css({"background":"yellow"} )
// Mouse Events practice
let heading = $("#heading")
heading.click(function () {
    heading.css({"background":"purple"})
})

let p = $("p")
// let clickhandler = ()=>{
//     $(this).css({"font-size": "18px"})
};
p.dblclick(function () {
    $(this).css({"font-size": "18px"})
})
// p.dblclick(clickhandler)
let li = $("li")

li.hover(function () {
    $(this).css({'color':'red'})
},function () {
    $(this).css({'color':'black'})
})