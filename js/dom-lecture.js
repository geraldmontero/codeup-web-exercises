//Change the span to say user input name


// var promptAnswer = prompt("Enter Name Please");
//
// var retrievedSpan = document.getElementById('name');
//
// console.log("promptAnswer:", promptAnswer);
// console.log("retrievedSpan:",retrievedSpan);
//
// retrievedSpan.textContent = promptAnswer;
//
// Document ----> the name if the DOM object
// getElementById() ----> searches by Id WILL (AND SHOULD) ONLY RETURN ONE ELEMENT
//getElementsByClass() ----> searches by Class ----> can return multiple
//getElementByTageName() ----> searches by tag name

// Change the text of the p tag
// var newText = document.getElementById("changeText");
//
//     newText.innerText = " Today's Weather is chilly and cloudy";

// loop through arrays to change each element returned
// for (var i =0; i < myElemts.length; i++){
//     myElemts[i].innerHTML = "hello world"
// }

// DOM EVENTS
//1. identify which element we want listening for an event
//2.retrieve the element we want listening for an event and save to a variable
//3. ADD an Event listener to the element  from step 2
// 4. Identify what event el should be listening for------ example "click"
//5. add a function that triggers when the event happens
// 6. inside of listener function, what change do we wan to make
//7. identify which element we want to affect. use style property to make changes

var el = document.getElementById("orange")

el.addEventListener("click",function (){
    console.log("click happened");
    el.style.color = "orange"
})

// find hello element (change element)
//define the button that will listen for the click
//add event listner to the button (.addEventlistner() )
//difine the listened event (click)
//add a fuction that changes the style
// .style.color = pink

var hello = document.getElementById("hello");

var btn = document.getElementById("btn");
console.log(btn);

btn.addEventListener("click",function (){
    hello.style.color = "pink"
})