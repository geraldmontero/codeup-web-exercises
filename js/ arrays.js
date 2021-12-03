let students = ["Gerald", "mark", "Mina","Jason","Justin","justin"];
console.log(students.length)

let favFood = [ "empanadillas", "pizza","steak","crawfish", "pasta"];
console.log(students[3])
console.log(students)
// concatenate the lastname to the first name
// access Justin value
//re-assign that value to equal justin + lastname
students[4] = students[4] + " Sebastian"
console.log(students[4])

//give each favorite food a rating 1 -5
favFood[0] = favFood[0] + " 2nd fave "
favFood[1]= favFood[1] + " 3rd fave"
console.log(favFood)
let valIndexZero = students[0]
console.log(valIndexZero)
//methods
//methods are pre existing functions parseInt(),console.log(), ect
let ages = [1,2,3,33,22,33]
for (let i = 0; i <= ages.length - 1; i++){
    console.log(ages[i]*2);
}
console.log("org", favFood)
console.log("reversed", favFood.reverse())
console.log(favFood)
console.log("sort food", favFood.sort())
console.log("fave food as string",favFood.join())
  let searchTerm = " soup ,salad ,sauce"
  let parsedSearchTerms = searchTerm.split(",")
console.log(parsedSearchTerms.sort())
console.log(...favFood,...searchTerm)
console.log("rice",...favFood)



