var theNumber = 2

while (theNumber <= 65536){
    console.log(theNumber)
    theNumber *= 2
}

// 8 //
var allCones = Math.floor(Math.random() * 50) + 50;

do {
    var conesToPurchase = Math.floor(Math.random() * 5) + 1;
    if(conesToPurchase <= allCones){
        console.log(conesToPurchase + " cones sold ...")
        allCones -= conesToPurchase
    }else {
        console.log("cannot sell you " + conesToPurchase + " cones I olny have   " + allCones + "...")
    }
    console.log(allCones)

}while (allCones > 0)
console.log(" I sold all the cones")