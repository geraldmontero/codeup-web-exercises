// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
//     Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

// let pickNum = prompt("please pick an odd number between 1 and 50")
// let myArray = [];
//     for (let i = 1; i < 50; i +=2){
//         myArray.push(i);
//     }
// console.log(myArray)
let userNumber = 0
do{
userNumber = Number(prompt("enter an odd number 1-50"));
if(userNumber < 1 || userNumber > 50){
    alert('Number out of bounds')
}else if (userNumber %2 ===0 ){
    alert("not odd")
}else if (isNaN(userNumber)){
    alert("not a number")
}else{
    alert('you picked a number')
    break;
}
}while(true)

console.log("number to skip "+ userNumber)
for (var i=1; i<=50;i+=2){
    if (i === userNumber){
        console.log("skiping number :" + userNumber)
        continue;
    }
    console.log("here is an odd number")
}