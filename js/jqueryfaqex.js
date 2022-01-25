// makes dd invisible
$("dd").click(function () {
    $(this).toggleClass("invisible");
});

//makes dd visible/invisible with toggle
$("#unhide").click(function () {
    $("dd").toggleClass("invisible");
});


$("dd").addClass("invisible");

//add highlight to dts
$("dt").click(function () {
    $(this).toggleClass("highlight")
});
// button to make last li yellow
$("#yellowli").click(function () {
    $('li:last-child').toggleClass("highlight")
});
// bolded li after h3 clicked

$('h3').click(function () {
    $(this).next().children("li").toggleClass('bold')
});
//When any list item is clicked, first li of the parent ul should have a font color of blue.

$('ul').click(function () {
    $(this).children('li:first-child').toggleClass('blue')
});