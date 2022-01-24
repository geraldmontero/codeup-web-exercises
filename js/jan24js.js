// add a border

$(".border").css({"border":"solid 2px red"});

// chnage h1 to say happy monday
//grab element
//chain a method
//pass in the value that i want
//.html setting or getting? Setting!
$('h1').html('Happy Monday');


// getting information open function, exception is removal functions .removeclas
$('h1').html()

// add a class of border to h2
$("#red").addClass("border");
$(".border").css({"border":"solid 2px red"});
//toggleClass()

// toggle our hi to be highlighted
//grab the element we want to change
//grab the element that's listening for a click
//change the css
//toggle it

$(".heading").click(function () {
    $(this).toggleClass("highlight");
})






