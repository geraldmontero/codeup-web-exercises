//Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this.
//

function randomUser(input) {


  fetch('https://api.github.com/users/${input}/events', {headers: {'Authorization': ''}})
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log( "last commit" + data.updated_at);
    })
    .catch(error => console.log(error));
}
randomUser("geraldmontero");

// Create Your Own Promise
// Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
//


//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));


// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


// 1. As a bonus make sure the promise resolves with the milliseconds in return, so you can make the console log message more dynamic.
