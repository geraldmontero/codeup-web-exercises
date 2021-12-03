// // 2//
// function showMultiplicationTable(number) {
//     for(let i=1; i <= 10; i++){
//                 console.log(parseInt(number) + " x " + i + ' = ' + (number * i))
//
//             }
//         }
// showMultiplicationTable(7)
// // 3 //
let randomNum = Math.floor(Math.random() * (200 - 20) + 20)
const isEven = num => num % 2 === 0;
for(let x=1; x <= 10; x++) {
    let num = randomNum * x;
    if (isEven(num) === true) {
        console.log(num + ' is even')
    }
    console.log(num + ' is odd ')

}
// 4 //

// for(let i=1; i<=9; i++)
// {
//     for( let j=1; j<=i; j++)
//         console.log(i)
// }
for (i = 1; i <= 9; i++) {
    let res = [];
    for (a = 1; a <= i; a++) {
        res.push(i);
    }
    console.log(res.join(""));
}
// 5 //
for (let b = 100; b > 0; b-=5) {
    console.log(b); }
