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